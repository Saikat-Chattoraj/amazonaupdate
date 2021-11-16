import Footer from "./Footer";
import Navbar from "./Navbar";
import Head from "next/dist/shared/lib/head";

const Layout = ({ title, children, description, addproperty = null }) => {
  return (
    <div className={`${addproperty} dark:bg-gray-900 bg-gray-300`}>
      {/* addprop is used in slug.js for setting h screen */}
      <Head>
        <title>{title ? `${title}-Amazona` : "Amazona"}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
