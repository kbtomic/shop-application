export const groupBrandsByLetter = (brands: string[]) => {
    const grouped = brands.reduce((acc: { [key: string]: string[] }, brand) => {
        const letter = brand[0].toUpperCase();
        if (!acc[letter]) {
        acc[letter] = [];
        }
        acc[letter].push(brand);
        return acc;
    }, {});

    return Object.keys(grouped).sort().map((letter) => ({
        title: letter,
        data: grouped[letter],
    }));
};