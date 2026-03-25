import { Outlet } from 'react-router-dom';

// MainLayout wraps all pages — add Navbar, Footer, etc. here later
export default function MainLayout() {
  return (
    <div className="layout">
      {/* <Navbar /> */}
      <main>
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
}
