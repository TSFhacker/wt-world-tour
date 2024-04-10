import BookingCalendar from "@/components/detailed_page/booking-calendar";
import Comfort from "@/components/detailed_page/comfort";
import DetailedHeader from "@/components/detailed_page/detailed-header";
import Itinerary from "@/components/detailed_page/itinerary";
import { Suspense } from "react";

export default function DetailedTour({ params }) {
  const TourInfo = async function () {
    const tourInfo = await fetch(
      `https://wt-world-tour-default-rtdb.asia-southeast1.firebasedatabase.app/tours/${params.slug}.json`
    );
    const result = await tourInfo.json();
    return (
      <>
        <DetailedHeader
          tourInfo={{
            tour_name: result.tour_name,
            images: result.images,
            language: result.language,
            min_group_size: result.min_group_size,
            duration: result.tour_duration,
            start: result.tour_start,
            end: result.tour_end,
            reasons: result.reasons,
            age: result.recommended_ages,
          }}
        />
        <Comfort
          {...{
            summary: result.summary,
            features: result.features,
            summary_image: result.summary_image,
          }}
        />
        <Itinerary itinerary={result.itinerary} />
      </>
    );
  };
  return (
    <>
      <Suspense>
        <TourInfo />
      </Suspense>
      <BookingCalendar />
    </>
  );
}
