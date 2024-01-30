import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="mt-12 px-4 sm:px-6 lg:px-16 font_manrope pt-8 max-w-[1500px] divide-y divide-opacity-10 divide-white flex justify-center bg-gradient-to-r from-[#091530] to-[#15316E] text-white ">
            <div className='max-w-[1500px]'>
                <div className="grid md:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-white divide-opacity-10 justify-between gap-10">
                    <div className="md:col-span-6 lg:pb-2">
                        <div className='flex gap-1 items-center mb-3'>
                            <img
                                className='w-[70px] h-[70px]'
                                src="https://furkanucgul.github.io/CDNapp/portfolio/images/8528727517.png"
                                alt="logo"
                            />
                            <h2 className='handWriting text-4xl'>
                                Furkan Üçgül
                            </h2>
                        </div>
                        <p className=" text-base">
                            Next.js, MERN Stack ve modern teknolojiler konusunda yetenekli bir JavaScript geliştiricisiyim. Performanslı, güvenli ve görsel olarak etkileyici web uygulamaları oluşturuyorum. Bir sonraki projenizde işbirliği yapalım!
                        </p>
                        <div
                            className="text-center mt-5"
                        >
                            Sosyal Medya Hesaplarım
                            <div className="color-change-5x h-[3px] rounded-full mt-1"></div>
                        </div>
                        <div className="flex flex-wrap justify-center space-x-3 mt-7">
                            {/* FACEBOOK */}
                            <div>
                                <Link target="_blank" href='https://www.facebook.com/profile.php?id=61552285312163' className="group rounded-full">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-3.2 -3.2 22.40 22.40"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        stroke="#000"
                                        strokeWidth={0.00016}
                                    >
                                        <path
                                            d="M8 18.178c2.048-.144 3.678-1.652 5.17-3.061 1.327-1.252 2.163-2.822 2.852-4.51.746-1.828 2.042-3.808 1.287-5.632-.753-1.82-3.364-1.812-4.885-3.063C10.74.527 10.144-3.068 8-2.683c-2.32.417-1.903 4.182-3.402 6-.934 1.132-2.586 1.315-3.546 2.426-1.47 1.7-3.684 3.392-3.415 5.624.264 2.196 2.787 3.302 4.635 4.516C4.034 17.041 5.897 18.326 8 18.178"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <path
                                            fill="#1877F2"
                                            d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                                        />
                                        <path
                                            fill="#fff"
                                            d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* INSTAGRAM */}
                            <div>
                                <Link target='_blank' href='https://www.instagram.com/furkanucgul.dev/' className="group rounded-full">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-4.8 -4.8 33.60 33.60"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            transform="matrix(1.05 0 0 1.05 -4.8 -4.8)"
                                            d="M16 31.53c2.293-.078 3.662-2.642 5.686-3.723 1.93-1.03 4.758-.69 5.977-2.506 1.242-1.853-.242-4.41.137-6.608.355-2.056 2.344-3.785 2.011-5.845-.33-2.049-2.337-3.351-3.743-4.877-1.332-1.443-2.645-2.878-4.333-3.88C19.963 3.036 18.05 2.208 16 1.99c-2.151-.23-4.34.03-6.359.805-2.097.806-4.408 1.786-5.496 3.75-1.095 1.976.265 4.494-.285 6.684-.565 2.253-3.199 3.906-2.952 6.216.24 2.254 2.534 3.698 4.178 5.259 1.501 1.425 3.284 2.396 5.04 3.494 1.932 1.209 3.596 3.409 5.874 3.332"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <g fill="#0F0F0F">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 100-8 4 4 0 000 8z"
                                            />
                                            <path d="M18 5a1 1 0 100 2 1 1 0 000-2z" />
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M1.654 4.276C1 5.56 1 7.24 1 10.6v2.8c0 3.36 0 5.04.654 6.324a6 6 0 002.622 2.622C5.56 23 7.24 23 10.6 23h2.8c3.36 0 5.04 0 6.324-.654a6 6 0 002.622-2.622C23 18.44 23 16.76 23 13.4v-2.8c0-3.36 0-5.04-.654-6.324a6 6 0 00-2.622-2.622C18.44 1 16.76 1 13.4 1h-2.8c-3.36 0-5.04 0-6.324.654a6 6 0 00-2.622 2.622zM13.4 3h-2.8c-1.713 0-2.878.002-3.778.075-.877.072-1.325.202-1.638.361a4 4 0 00-1.748 1.748c-.16.313-.29.761-.36 1.638C3.001 7.722 3 8.887 3 10.6v2.8c0 1.713.002 2.878.075 3.778.072.877.202 1.325.361 1.638a4 4 0 001.748 1.748c.313.16.761.29 1.638.36.9.074 2.065.076 3.778.076h2.8c1.713 0 2.878-.002 3.778-.075.877-.072 1.325-.202 1.638-.361a4 4 0 001.748-1.748c.16-.313.29-.761.36-1.638.074-.9.076-2.065.076-3.778v-2.8c0-1.713-.002-2.878-.075-3.778-.072-.877-.202-1.325-.361-1.638a4 4 0 00-1.748-1.748c-.313-.16-.761-.29-1.638-.36C16.278 3.001 15.113 3 13.4 3z"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </div>

                            {/* TELEGRAM */}
                            <div>
                                <Link href='#' className="group rounded-full">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-20 -20 140.00 140.00"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            transform="translate(-20 -20) scale(4.375)"
                                            d="M16 30.784c2.264-.437 2.638-3.997 4.76-4.901 2.274-.97 5.432 1.347 7.32-.249 1.737-1.467 1.393-4.464.874-6.677-.482-2.054-3.043-3.06-3.632-5.085-.54-1.854.863-3.804.492-5.699-.463-2.373-.558-5.905-2.887-6.557-2.57-.719-4.28 3.468-6.927 3.811-2.166.28-3.932-2.24-6.113-2.121-2.324.126-4.709 1.098-6.302 2.794-1.607 1.71-2.753 4.184-2.44 6.51.323 2.389 3.21 3.605 4.106 5.843.718 1.796-.39 3.999.516 5.708.926 1.746 2.839 2.674 4.498 3.748 1.818 1.176 3.609 3.286 5.735 2.875"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            id="SVGRepo_bgCarrier"
                                            strokeWidth={0}
                                        />
                                        <g id="SVGRepo_iconCarrier">
                                            <style />
                                            <path
                                                d="M88.723 12.142C76.419 17.238 23.661 39.091 9.084 45.047c-9.776 3.815-4.053 7.392-4.053 7.392s8.345 2.861 15.499 5.007c7.153 2.146 10.968-.238 10.968-.238l33.62-22.652c11.922-8.107 9.061-1.431 6.199 1.431-6.199 6.2-16.452 15.975-25.036 23.844-3.815 3.338-1.908 6.199-.238 7.63 6.199 5.246 23.129 15.976 24.082 16.691 5.037 3.566 14.945 8.699 16.452-2.146l5.961-37.435c1.908-12.637 3.815-24.321 4.053-27.659.716-8.108-7.868-4.77-7.868-4.77z"
                                                fill="#1b92d1"
                                                id="Layer_2"
                                            />
                                        </g>
                                    </svg>
                                </Link>
                            </div>

                            {/* GIT HUB */}
                            <div>
                                <Link target='_blank' href='https://github.com/furkanucgul' className="group rounded-full">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-4 -4 28.00 28.00"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            transform="matrix(.875 0 0 .875 -4 -4)"
                                            d="M16 31.041c2.741-.594 3.774-3.98 6.105-5.541 2.264-1.516 6.31-.844 7.25-3.401.964-2.623-2.626-4.826-3.22-7.556-.529-2.431 1.512-5.348-.014-7.312-1.513-1.947-4.753-.812-7.032-1.752-2.68-1.105-4.533-4.539-7.413-4.204-2.816.327-4.12 3.658-6.016 5.766C3.723 9.193.961 10.914.44 13.763c-.527 2.87 1.164 5.606 2.48 8.211 1.27 2.515 2.684 4.996 5 6.6C10.28 30.213 13.19 31.65 16 31.042"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <path
                                            d="M94 7399c5.523 0 10 4.59 10 10.253 0 4.529-2.862 8.371-6.833 9.728-.507.101-.687-.219-.687-.492 0-.338.012-1.442.012-2.814 0-.956-.32-1.58-.679-1.898 2.227-.254 4.567-1.121 4.567-5.059 0-1.12-.388-2.034-1.03-2.752.104-.259.447-1.302-.098-2.714 0 0-.838-.275-2.747 1.051a9.396 9.396 0 00-2.505-.345 9.375 9.375 0 00-2.503.345c-1.911-1.326-2.751-1.051-2.751-1.051-.543 1.412-.2 2.455-.097 2.714-.639.718-1.03 1.632-1.03 2.752 0 3.928 2.335 4.808 4.556 5.067-.286.256-.545.708-.635 1.371-.57.262-2.018.715-2.91-.852 0 0-.529-.985-1.533-1.057 0 0-.975-.013-.068.623 0 0 .655.315 1.11 1.5 0 0 .587 1.83 3.369 1.21.005.857.014 1.665.014 1.909 0 .271-.184.588-.683.493-3.974-1.355-6.839-5.199-6.839-9.729 0-5.663 4.478-10.253 10-10.253"
                                            transform="translate(-140 -7559) translate(56 160)"
                                            fill="#000"
                                            stroke="none"
                                            strokeWidth={1}
                                            fillRule="evenodd"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* LINKEDIN */}
                            <div>
                                <Link target='_blank' href='https://www.linkedin.com/in/furkanucgul/' className="group rounded-full">
                                    <svg
                                        viewBox="-3.2 -3.2 22.40 22.40"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        width='64px'
                                        height='64px'
                                    >
                                        <path
                                            transform="matrix(.7 0 0 .7 -3.2 -3.2)"
                                            d="M16 29.15c3.918.107 7.557-2.117 9.837-5.305 2.144-2.996 2.224-6.819 1.407-10.411-.818-3.597-2.49-7.114-5.775-8.791-3.367-1.72-7.245-1.016-10.774.34C6.639 6.541 1.785 8.3.885 12.55c-.892 4.22 3.023 7.588 5.927 10.777 2.568 2.82 5.375 5.72 9.188 5.823"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <path
                                            fill="#0A66C2"
                                            d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"
                                        />
                                    </svg>
                                </Link>
                            </div>

                            {/* X */}
                            <div>
                                <Link target='_blank' href='https://twitter.com/furkanucguljs' className="group rounded-full">
                                    <svg
                                        height="64px"
                                        width="64px"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="-102.4 -102.4 716.80 716.80"
                                    >
                                        <path
                                            transform="matrix(22.4 0 0 22.4 -102.4 -102.4)"
                                            d="M16 30.8c2.25.596 4.596-1.315 6.185-3.016 1.473-1.578 1.422-3.977 2.22-5.983.62-1.555 1.144-3.084 1.969-4.541 1.373-2.427 5.437-4.275 4.507-6.903-.919-2.595-5.704-.565-7.787-2.364-2.041-1.763-.708-6.637-3.336-7.241-2.651-.61-3.694 4.174-6.277 5.03-2.28.755-5.206-2.12-7.073-.61-1.829 1.48-.568 4.569-.724 6.916-.117 1.746.186 3.444-.081 5.174-.383 2.476-3.331 5.172-1.83 7.177 1.535 2.05 5.283-.715 7.553.466C13.584 26.079 13.54 30.148 16 30.8"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8l164.9-188.5L26.8 48h145.6l100.5 132.9L389.2 48zm-24.8 373.8h39.1L151.1 88h-42l255.3 333.8z" />
                                    </svg>
                                </Link>
                            </div>

                            {/* WHATSAPP */}
                            <div>
                                <Link href='#' className="group rounded-full">
                                    <svg
                                        width="64px"
                                        height="64px"
                                        viewBox="-6.4 -6.4 44.80 44.80"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            transform="matrix(1.4 0 0 1.4 -6.4 -6.4)"
                                            d="M16 29.14c2.378-.452 3.998-2.482 6.189-3.51 2.648-1.243 6.48-.65 8-3.15 1.493-2.452.136-5.736-.984-8.379-.957-2.26-3.15-3.57-4.832-5.356-1.599-1.696-2.759-3.772-4.81-4.876-2.362-1.27-5.09-2.586-7.664-1.834-2.573.752-3.684 3.672-5.47 5.671-1.821 2.037-4.934 3.456-5.126 6.18-.193 2.744 3.032 4.418 4.203 6.907 1.151 2.446.467 5.833 2.583 7.516 2.118 1.685 5.252 1.336 7.911.831"
                                            fill="#fb8500"
                                            className="group-hover:fill-white"
                                            strokeWidth={0}
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16 31c7.732 0 14-6.268 14-14S23.732 3 16 3 2 9.268 2 17c0 2.51.661 4.867 1.818 6.905L2 31l7.315-1.696A13.938 13.938 0 0016 31zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 5.154 4.154 10.458 4.154 17c0 2.526.79 4.867 2.138 6.79L5.23 27.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                                            fill="#BFC8D0"
                                        />
                                        <path
                                            d="M28 16c0 6.627-5.373 12-12 12-2.528 0-4.873-.782-6.807-2.116L5.09 26.909l1.075-4.03A11.945 11.945 0 014 16C4 9.373 9.373 4 16 4s12 5.373 12 12z"
                                            fill="url(#a)"
                                        />
                                        <path
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2 2 8.268 2 16c0 2.51.661 4.867 1.818 6.905L2 30l7.315-1.696A13.938 13.938 0 0016 30zm0-2.154c6.543 0 11.846-5.303 11.846-11.846 0-6.542-5.303-11.846-11.846-11.846C9.458 4.154 4.154 9.458 4.154 16c0 2.526.79 4.867 2.138 6.79L5.23 26.77l4.049-1.013a11.791 11.791 0 006.72 2.09z"
                                            fill="#fff"
                                        />
                                        <path
                                            d="M12.5 9.5c-.333-.669-.844-.61-1.36-.61-.921 0-2.359 1.105-2.359 3.16 0 1.684.742 3.528 3.243 6.286 2.414 2.662 5.585 4.039 8.218 3.992 2.633-.047 3.175-2.313 3.175-3.078 0-.339-.21-.508-.356-.554-.897-.43-2.552-1.233-2.928-1.384-.377-.15-.573.054-.695.165-.342.325-1.019 1.284-1.25 1.5-.232.215-.578.106-.721.024-.53-.212-1.964-.85-3.107-1.958-1.415-1.371-1.498-1.843-1.764-2.263-.213-.336-.057-.542.021-.632.305-.351.726-.894.914-1.164.189-.27.04-.679-.05-.934-.387-1.097-.715-2.015-.981-2.55z"
                                            fill="#fff"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="a"
                                                x1={26.5}
                                                y1={7}
                                                x2={4}
                                                y2={28}
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stopColor="#5BD066" />
                                                <stop offset={1} stopColor="#27B43E" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </Link>
                            </div>

                        </div>
                    </div>
                    <div className="md:col-span-3  pt-8 lg:pt-0 lg:pl-12">
                        <h4 className="mb-7  text-2xl font-semibold">
                            Bağlantılar
                        </h4>
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <Link href='/'>
                                        Anasayfa
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://furkanucgul.github.io/aboutme'>
                                        Hakkımda
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://furkanucgul.github.io/projects'>
                                        Projeler
                                    </Link>
                                </li>
                                <li>
                                    <Link href='https://furkanucgul.github.io/'>
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="md:col-span-3  pt-8 lg:pt-0 lg:pl-12 py-10 lg:py-0">
                        <h4 className="mb-7  text-2xl font-semibold">
                            Hizmetler
                        </h4>
                        <nav>
                            <ul className="space-y-4">
                                <li>
                                    <a target='_blank' href="https://builderweb.vercel.app/pagebuilder">
                                        Kodlamasız Web Sitesi Oluşturucu
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://furkanucgul.github.io">
                                        Web Uygulama Geliştirme
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://furkanucgul.github.io">
                                        Özelleştirilmiş Web Çözümleri
                                    </a>
                                </li>
                                <li>
                                    <a target='_blank' href="https://furkanucgul.github.io">
                                        Mobil Uygulama Geliştirme
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='py-3 group/portfolio'>
                    <div className='flex flex-col md:flex-row items-center md:justify-end gap-2 text-center'>
                        <span>© 2023 ArabaKirala. ❤️ ile tasarladı.</span>
                        <a target='_blank' href="https://furkanucgul.github.io">
                            <div className="flex items-center gap-2">
                                <div className='color-change-5x p-[2px] rounded-full'>
                                    <img
                                        className='rounded-full w-[50px] h-[50px]'
                                        src="https://furkanucgul.github.io/profilhead.png"
                                        alt="profil image"
                                    />
                                </div>
                                <span className='group-hover/portfolio:text-[#fb8500]'>
                                    Furkan Ucgul
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </footer >
    )
}

export default Footer