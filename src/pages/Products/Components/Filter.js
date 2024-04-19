import { useState } from "react"
import { useFilter } from "../../../context/filterContext"

export const Filter = ({ setShowFilter }) => {
    const [priceFilter, setPriceFilter] = useState()

    const { state, bestSellerDispatch, inStockDispatch, ratingDispatch, priceDispatch, clearDispatch } = useFilter()

    function handlePriceFilter(e) {
        priceDispatch(e.target.value)
    }

    function handleRatingFilter(e) {
        ratingDispatch(e.target.value)
    }

    function handleBestsellerFilter() {
        bestSellerDispatch();
    }

    function handeleInstockFilter() {
        inStockDispatch();
    }

    function handleClear() {
        clearDispatch()
    }

    return (
        <div className="fixed top-0 left-0 bottom-0 border-r-2 bg-slate-100 z-30">
            <div className="flex justify-between font-bold text-2xl border-b border-slate-300 p-3 pt-5 mb-3">
                <span>FILTERS</span>
                <button onClick={() => setShowFilter(false)} className="hover:bg-slate-200 rounded-full w-10 h-10"><i className="bi bi-x-lg"></i></button>
            </div>
            <div className="flex flex-col gap-7 px-7 py-5">
                <div className="text-lg">
                    <span className="font-semibold text-lg">Sort by</span>
                    <div>
                        <input onChange={handlePriceFilter} checked={state.priceFilter === 'lowToHigh'} value='lowToHigh' type="radio" name="price" id="price_lowToHigh" className="me-3 w-4 h-4" />
                        <label htmlFor="price_lowToHigh">Price - Low to High</label>
                    </div>
                    <div>
                        <input onChange={handlePriceFilter} checked={state.priceFilter === 'highToLow'} value='highToLow' type="radio" name="price" id="price_highToLow" className="me-3 w-4 h-4" />
                        <label htmlFor="price_highToLow">Price - High to Low</label>
                    </div>
                </div>

                <div className="text-lg">
                    <span className="font-semibold text-lg">Rating</span>
                    <div>
                        <input onChange={handleRatingFilter} checked={state.ratingFilter === 'stars_4'} value='stars_4' type="radio" name="stars" id="stars_4" className="me-3 w-4 h-4" />
                        <label htmlFor="stars_4">4 Stars & Above</label>
                    </div>
                    <div>
                        <input onChange={handleRatingFilter} checked={state.ratingFilter === 'stars_3'} value='stars_3' type="radio" name="stars" id="stars_3" className="me-3 w-4 h-4" />
                        <label htmlFor="stars_3">3 Stars & Above</label>
                    </div>
                    <div>
                        <input onChange={handleRatingFilter} checked={state.ratingFilter === 'stars_2'} value='stars_2' type="radio" name="stars" id="stars_2" className="me-3 w-4 h-4" />
                        <label htmlFor="stars_2">2 Stars & Above</label>
                    </div>
                    <div>
                        <input onChange={handleRatingFilter} checked={state.ratingFilter === 'stars_1'} value='stars_1' type="radio" name="stars" id="stars_1" className="me-3 w-4 h-4" />
                        <label htmlFor="stars_1">1 Stars & Above</label>
                    </div>
                </div>

                <div className="text-lg">
                    <span className="font-semibold text-lg">Other Filters</span>
                    <div>
                        <input onChange={handleBestsellerFilter} checked={state.bestSellerFilter} type="checkbox" name="bestseller" id="bestseller" className="me-3 w-4 h-4" />
                        <label htmlFor="bestseller">BESTSELLER Only</label>
                    </div>
                    <div>
                        <input onChange={handeleInstockFilter} checked={state.InstockFilter} type="checkbox" name="instock" id="instock" className="me-3 w-4 h-4" />
                        <label htmlFor="instock">INSTOCK Only</label>
                    </div>
                </div>

                <button onClick={handleClear} className="w-full border py-3 bg-slate-200 hover:bg-slate-300 font-bold">Clear</button>
            </div>
        </div>
    )
}
