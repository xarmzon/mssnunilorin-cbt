import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className="h-36 w-36">
      <Link href="/">
        <a>
          <Image
            className="object-contain"
            src="/assets/images/logo.png"
            height="501"
            width="491"
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
