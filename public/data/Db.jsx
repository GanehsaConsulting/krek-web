import { FaFacebookF, FaInstagram, FaPhone, FaShippingFast, FaWhatsapp } from "react-icons/fa";
import { PiShieldStarFill } from "react-icons/pi";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMailOutline, IoSparklesSharp } from "react-icons/io5";
import { FaHandHoldingHand } from "react-icons/fa6";
import { GrDeliver } from "react-icons/gr";
import { MdPriceCheck } from "react-icons/md";

export function urlFriendly(text) {
    return `${text.toLowerCase().replace(/\s+/g, '-')}`;
}

export const navbarLink = [
    {
        label: "Tentang Kami",
        href: ""
    },
    {
        label: "Visi & Misi",
        href: ""
    },
    {
        label: "Produk",
        href: ""
    },
    {
        label: "Layanan",
        href: ""
    },
    {
        label: "FAQ",
        href: ""
    },
    {
        label: "Kontak",
        href: ""
    },
]

export const aboutUs = 'Sebagai perusahaan yang terus berkembang, PT KREK TRANSFORMASI DIGITAL berupaya menjadi pelopor dalam industri fashion online dengan mengedepankan inovasi, kenyamanan, dan kepuasan pelanggan. Kami percaya bahwa setiap wanita berhak tampil percaya diri dengan pilihan fashion yang tepat, dan kami siap menjadi mitra dalam perjalanan fashion Anda.'

export const VisionMission = {
    vision: 'Menjadi platform ecommerce terdepan dalam menyediakan pakaian wanita yang stylish dan berkualitas, menjangkau pelanggan di seluruh Indonesia.',
    mission: (
        <>
            <p className="list-item">
                Menyediakan produk fashion terkini yang dapat diakses dengan mudah oleh semua kalangan.
            </p>
            <p className="list-item">
                Memberikan layanan pelanggan yang responsif dan berkualitas tinggi.
            </p>
            <p className="list-item">
                Membangun kepercayaan pelanggan dengan menawarkan pakaian berkualitas terbaik dengan harga kompetitif.
            </p>
            <p className="list-item">
                Mengutamakan kemudahan dan kenyamanan berbelanja online.
            </p>
        </>
    )
}

export const whyUs = [
    {
        title: "Kualitas Terjamin",
        icon: <FaHandHoldingHand/>,
        description: "Setiap produk kami dipilih dengan teliti untuk memastikan kualitas terbaik bagi pelanggan."
    },
    {
        title: "Desain Terkini",
        icon: <IoSparklesSharp/>,
        description: "Kami selalu mengikuti tren fashion terbaru, menawarkan koleksi pakaian yang modern dan stylish."
    },
    {
        title: "Layanan Pelanggan Responsif",
        icon: <RiCustomerService2Fill />,
        description: "Kami siap membantu Anda dengan layanan pelanggan yang cepat dan ramah untuk memastikan pengalaman terbaik."
    },
    {
        title: "Pengiriman Luas",
        icon: <GrDeliver />,
        description: "Kami melayani pengiriman ke seluruh Indonesia dengan berbagai opsi pengiriman yang cepat dan aman."
    },
    {
        title: "Harga Kompetitif",
        icon: <MdPriceCheck />,
        description: "Kami menawarkan produk berkualitas dengan harga yang bersaing, memberikan nilai lebih bagi setiap pembelian Anda."
    }
]

export const products = [
    {
        name: 'Dress',
        desc: 'Pilihan dress modern dan elegan untuk berbagai kesempatan.',
        img: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        child: [
            {
                prodName: 'White Dress',
                imgProd: 'https://images.unsplash.com/photo-1651047566242-1f93897b907a?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                prodName: 'Blue Dress',
                imgProd: 'https://images.unsplash.com/photo-1651047641291-fd6789c09271?q=80&w=2216&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
                prodName: 'Violet Dress',
                imgProd: 'https://images.unsplash.com/photo-1609952918858-4cd16077ab5c?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
        ]
    },
    {
        name: 'Blouse',
        desc: 'Blouse dengan desain trendi dan nyaman untuk sehari-hari.',
        img: 'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        child: [
            {
                prodName: 'Strip Blouse',
                imgProd: 'https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Black Blouse',
                imgProd: 'https://images.unsplash.com/photo-1568251478083-32c27296c2c2?q=80&w=2943&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'White Blouse',
                imgProd: 'https://images.unsplash.com/photo-1577922087876-3563c607db32?q=80&w=2845&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }
        ]
    },
    {
        name: 'Celana',
        desc: 'Celana dengan berbagai gaya, mulai dari casual hingga formal.',
        img: 'https://images.unsplash.com/photo-1514813482567-2858e6c00ee1?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        child: [
            {
                prodName: 'Jeans',
                imgProd: 'https://images.unsplash.com/photo-1668988462170-7810d9ab0fec?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Chuck Taylors',
                imgProd: 'https://images.unsplash.com/photo-1636602217762-ecedfe9a8aae?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Sweatpants',
                imgProd: 'https://images.unsplash.com/photo-1588117305388-c2631a279f82?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ]
    },
    {
        name: 'Rok',
        desc: 'Rok stylish yang cocok untuk segala suasana.',
        img: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        child: [
            {
                prodName: 'Pink Skirt`',
                imgProd: 'https://images.unsplash.com/photo-1529189440706-49f40f24e4a5?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Black Skirt',
                imgProd: 'https://images.unsplash.com/photo-1695141306931-7354d59b70fe?q=80&w=2448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Tartan Skirt',
                imgProd: 'https://images.unsplash.com/photo-1616186612308-3f7462b51737?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ]
    },
    {
        name: 'Jaket & Outwear',
        desc: 'Pilihan outerwear yang memberikan kenyamanan dan gaya.',
        img: 'https://images.unsplash.com/photo-1499939667766-4afceb292d05?q=80&w=2946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        child: [
            {
                prodName: 'Yellow Jacket',
                imgProd: 'https://images.unsplash.com/photo-1683975202695-bf851d2045da?q=80&w=3022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Stripped Jacket`',
                imgProd: 'https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Denim Jacket',
                imgProd: 'https://images.unsplash.com/photo-1485811661309-ab85183a729c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ]
    },
    {
        name: 'Aksesoris',
        desc: 'Aksesoris pendukung yang memperindah penampilan Anda.',
        img: 'https://images.unsplash.com/photo-1627683566270-bf7e75dfec0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybCUyMGFjY2Vzb3JpZXN8ZW58MHx8MHx8fDA%3D',
        child: [
            {
                prodName: 'Sun Glasses',
                imgProd: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Pink Hat',
                imgProd: 'https://images.unsplash.com/photo-1474073705359-5da2a8270c64?q=80&w=3092&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
            {
                prodName: 'Jewelry',
                imgProd: 'https://images.unsplash.com/photo-1655255114527-d0a834d9a774?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            },
        ]
    },
]

export const services = [
    {
        name: "Pengiriman Cepat",
        icon: <FaShippingFast />,
        desc: "Kami bekerja sama dengan berbagai penyedia jasa pengiriman untuk memastikan produk tiba dengan cepat dan aman.",
    },
    {
        name: "Garansi Pengembalian",
        icon: <PiShieldStarFill />,
        desc: "Jika produk tidak sesuai atau mengalami c acat, kami menyediakan layanan pengembalian barang dengan mudah.",
    },
    {
        name: "Customer Support",
        icon: <RiCustomerService2Fill />,
        desc: "Tim layanan pelanggan kami siap membantu dan menjawab pertanyaan kapan pun dibutuhkan.",
    }
]

export const faq = [
    {
        question: "Apakah saya bisa memesan langsung melalui website ini?",
        answer: "Website ini berfungsi sebagai landing page untuk memberikan informasi mengenai produk dan layanan kami. Untuk melakukan pemesanan, silakan hubungi tim kami melalui kontak yang tersedia."
    },
    {
        question: "Bagaimana cara mengetahui produk terbaru?",
        answer: "Anda dapat mengikuti media sosial kami atau menghubungi kami langsung untuk mendapatkan informasi terbaru mengenai koleksi pakaian wanita dan penawaran menarik lainnya."
    },
    {
        question: "Apakah ada showroom atau toko fisik?",
        answer: "Saat ini kami beroperasi secara online. Namun, untuk informasi lebih lanjut mengenai produk kami, Anda bisa menghubungi customer service."
    },
    {
        question: "Bagaimana cara menghubungi layanan pelanggan?",
        answer: "Anda bisa menghubungi layanan pelanggan kami melalui nomor telepon atau email yang tercantum pada bagian kontak di website ini. Kami siap membantu menjawab pertanyaan Anda."
    },
    {
        question: "Apakah perusahaan ini melayani pengiriman ke seluruh Indonesia?",
        answer: "Kami menyediakan layanan pengiriman ke seluruh Indonesia melalui berbagai platform ecommerce yang bekerja sama dengan kami. Informasi detail mengenai pengiriman bisa Anda dapatkan setelah menghubungi kami."
    },
    {
        question: "Di mana saya bisa melihat detail produk yang ditawarkan?",
        answer: "Untuk detail produk, Anda dapat mengunjungi platform ecommerce yang kami dukung atau menghubungi kami secara langsung untuk mendapatkan katalog produk terbaru."
    }
]

export const contacts = {
    address: {
        label: "Kantor Operasional",
        data: "Jl. Raya Masjid Al Hidayah No.5, RT.6/RW.7, Pejaten Barat, Pasar Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
        embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126905.92489499568!2d106.7575353514891!3d-6.288666897638287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3007a6e8e39%3A0xf83b477d03a6931f!2sGANESHA%20CONSULTING%20-%20OPERATIONAL!5e0!3m2!1sid!2sid!4v1723453298072!5m2!1sid!2sid",
        link: "https://maps.app.goo.gl/jvz8ScJZtUmAnT7SA"
    },
    phone: {
        name: '1234 5678 91011',
        link: '',
        logo: <FaPhone />
    },
    mail: {
        name: "krek@mail.com",
        link: "",
        logo: <IoMailOutline />
    },
    socmed: [
        {
            name: 'Instagram',
            link: '',
            logo: <FaInstagram />,
        },
        {
            name: 'Facebook',
            link: '',
            logo: <FaFacebookF />,
        },
        {
            name: 'WhatsApp',
            link: '',
            logo: <FaWhatsapp />,
        },
    ]
}