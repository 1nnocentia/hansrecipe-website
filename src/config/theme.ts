// Theme constants untuk Han's Recipe
// Warna didefinisikan di index.css menggunakan @theme (Tailwind CSS v4)
export const THEME = {
    colors: {
        primary: 'sage',
        primaryHex: '#4A5D4E',
        bg: 'earth',
        bgHex: '#FDFBF7',
        text: {
            dark: 'text-gray-900',
            medium: 'text-gray-600',
            light: 'text-white',
            muted: 'text-white/70',
            accent: 'text-sage',
        },
        button: {
            primary: 'bg-sage text-white hover:bg-sage/90',
            outline: 'border border-sage text-sage hover:bg-sage/5',
        }
    },
    spacing: {
        section: 'py-24',
        container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    },
    typography: {
        heading: 'font-serif font-bold text-gray-900',
        body: 'font-sans text-gray-600 leading-relaxed',
    }
};