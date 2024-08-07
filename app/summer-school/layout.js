import Navbar from "@/components/layout/navbar";

export const metadata = {
  title: "WT World Tour's summer school",
  description:
    "WT World Tour provides you with the best tours, helping you explore the world with the most affordable price",
};

export default function RootLayout({ children }) {
  return (
    <div>
      <Navbar fixed={true} />
      {children}
    </div>
  );
}
