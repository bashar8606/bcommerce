"use client"
import { usePathname } from 'next/navigation'

const AccountLayout = ({ children }) => {

    const pathname = usePathname()

    return (
        <main className={``} >
            <div className={`pt-0 pt-lg-4`}>
                <div className="container container-small">
                    <div className="row">
                        <aside className={`px-0 px-lg-2 bg-white }`}>
                            sidebar
                        </aside>
                        <div className={`col `}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AccountLayout;


const links = [
    {
        url: "/profile",
        title: "Profile",
        title_sm: "Profile",
        icon: {
            url: "/assets/images/icons/icon-dl-profile.svg",
            alt: "profile icon"
        }
    },
    {
        url: "/orders",
        title: "Orders",
        title_sm: "Orders",
        icon: {
            url: "/assets/images/icons/icon-dl-orders.svg",
            alt: "shop icon"
        }
    }, {
        url: "/wishlist",
        title: "Wishlist",
        title_sm: "Wishlist",
        icon: {
            url: "/assets/images/icons/icon-dl-orders.svg",
            alt: "shop icon"
        }
    }, {
        url: "/manage-addresses",
        title: "Delivery Address",
        title_sm: "Addresses",
        icon: {
            url: "/assets/images/icons/icon-dl-address.svg",
            alt: "address list icon"
        }
    }, {
        url: "/change-password",
        title: "Change Password",
        title_sm: "Password",
        icon: {
            url: "/assets/images/icons/icon-dl-password.svg",
            alt: "change password list icon"
        }
    },
]