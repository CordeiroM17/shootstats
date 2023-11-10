import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link href={'/dashboard'} className="flex gap-1">
            <span className="text-xl">
                ShootStats
            </span>
        </Link>
    )
}