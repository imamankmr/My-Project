import Link from 'next/link';  // Adjust the import according to your routing library

const Header2 = () => {
  return (
    <div>
      <div className="flex px-10 py-3 bg-gray-100 justify-between">
        <Link href="/hotels?city=Banglore">
          <span>Banglore</span>
        </Link>
        <Link href="/hotels?city=Kolkata">
          <span>Kolkata</span>
        </Link>
        <Link href="/hotels?city=Mumbai">
          <span>Mumbai</span>
        </Link>
        <Link href="/hotels?city=Delhi">
          <span>Delhi</span>
        </Link>
        <Link href="/hotels?city=Hyderabad">
          <span>Hyderabad</span>
        </Link>
      </div>
    </div>
  );
};

export default Header2;

