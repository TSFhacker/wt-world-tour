"use client";

import TourCard from "./tour-card";
import classes from "./tour-section.module.css";
import { FaPhone, FaSearch } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { useEffect, useRef, useState } from "react";
import ReactPaginate from "react-paginate";
import ClipLoader from "react-spinners/ClipLoader";

export default function TourSection() {
  const [tours, setTours] = useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [filteredTours, setFilteredTours] = useState([]);
  const [searchTours, setSearchTours] = useState([]);
  const [categoryList, setCategoryList] = useState([]);

  const searchInputRef = useRef();

  const fetchTours = async function () {
    const tours = await fetch(
      `https://wt-world-tour-default-rtdb.asia-southeast1.firebasedatabase.app/tours.json`
    );

    const result = await tours.json();
    setTours(result);
    setFilteredTours(Object.values(result));
    setSearchTours(Object.values(result));
    let tempList = [];
    Object.values(result).forEach((tour) =>
      tour.countries.forEach((country) => {
        let foundValue = tempList.find((item) => item.country === country);
        if (foundValue) {
          foundValue.count += 1;
        } else tempList.push({ country: country, count: 1 });
      })
    );
    setCategoryList(tempList);
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = Object.values(searchTours).slice(itemOffset, endOffset);

  const pageCount = Math.ceil(Object.values(searchTours).length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset =
      (event.selected * itemsPerPage) % Object.values(searchTours).length;
    setItemOffset(newOffset);
  };

  const handleFind = function (e) {
    setSearchTours(
      filteredTours
        .map((tour, i) =>
          tour.slug ? tour : { ...tour, slug: Object.keys(tours)[i] }
        )
        .filter((tour) =>
          tour.tour_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
    );
  };

  const handleFilter = function (e) {
    const markedCheckbox = new Array(
      ...document.querySelectorAll('input[type="checkbox"]:checked')
    ).map((checkbox) => checkbox.closest("label").textContent.slice(0, -4));
    if (markedCheckbox.length === 0) {
      const filtered = Object.values(tours)
        .map((tour, i) => {
          return { ...tour, slug: Object.keys(tours)[i] };
        })
        .filter((tour) =>
          tour.tour_name.includes(searchInputRef.current.value)
        );
      setFilteredTours(Object.values(tours));
      setSearchTours(filtered);
      return;
    }

    const filtered2 = Object.values(tours)
      .map((tour, i) => {
        return { ...tour, slug: Object.keys(tours)[i] };
      })
      .filter((tour) =>
        tour.countries.some(
          (country) =>
            markedCheckbox.includes(country) &&
            tour.tour_name.includes(searchInputRef.current.value)
        )
      );

    console.log(filtered2);

    setFilteredTours(filtered2);
    setSearchTours(filtered2);
  };

  return (
    <section className={classes.all_tours}>
      <h1>Find your dream tour</h1>
      <div className={classes.search}>
        <input
          type="text"
          placeholder="Type to find"
          onChange={handleFind}
          ref={searchInputRef}
        />
        <FaSearch />
      </div>

      <div className={classes.tour_section}>
        <div className={classes.tours_container}>
          {currentItems.length ? (
            currentItems.map((tour, i) => (
              <TourCard tour={tour} slug={tour.slug || Object.keys(tours)[i]} />
            ))
          ) : Object.values(tours).length ? (
            <p className={classes.loader}>No tours found!</p>
          ) : (
            <ClipLoader className={classes.loader} />
          )}
          <ReactPaginate
            className={classes.pagination_bar}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
        </div>
        <div className={classes.contact}>
          <div className={classes.reasons}>
            <h3>Category</h3>
            {categoryList.length ? (
              categoryList.map((category) => (
                <label>
                  <input type="checkbox" onChange={handleFilter} />
                  {`${category.country} (${category.count})`}
                </label>
              ))
            ) : (
              <ClipLoader />
            )}
          </div>
          <div className={classes.info}>
            <h3>Contact us</h3>
            <p>
              <FaPhone /> <span>+44 7593 735102</span>
            </p>
            <p>
              <CiMail />
              <span>wendytrinh@wtworldtour.com</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
