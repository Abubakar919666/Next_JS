"use client";
type CategoriesType = {
    categories: string[];
    onCategorySelect: (category: string) => void;
}

export default function Categories({categories, onCategorySelect}: CategoriesType) {
    const selectCategory = (categoryName: string)=>{
        onCategorySelect(categoryName);
    }

    return (
        <>
            {
               categories.map((category, i)=>(
                <button key={category + i} onClick={()=>{selectCategory(category)}}>
                    {category}
                </button>
               )) 
            }
        </>
    )
}