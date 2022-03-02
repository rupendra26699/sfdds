
import ReactPaginate from "react-paginate"

// TODO Refactor styling to use tailwind custom variables

export default function Pagination({ pageCount, gotoPage, pageIndex }) {
    const onPageChange = (event) => {
        gotoPage(event.selected)

    }
    return (
        <nav aria-label="Page Navigation" className="mt-[20px]">
            <ReactPaginate
                pageCount={pageCount}
                onPageChange={onPageChange}
                renderOnZeroPageCount={null}

                previousLabel="<"
                nextLabel=">"
                breakLabel="..."
                pageClassName="flex justify-center items-center py-[8px] px-[14px] border border-zinc-300 text-slate-600 cursor-pointer"
                breakClassName="flex justify-center items-center  py-[8px] px-[14px] border border-zinc-300 text-slate-600"
                previousClassName="flex justify-center items-center py-[8px] px-[14px] border border-zinc-300 rounded-tl-[3px] rounded-bl-[3px] text-slate-400"
                nextClassName="flex justify-center items-center  py-[8px] px-[14px] border border-zinc-300 rounded-tr-[3px] rounded-br-[3px] text-slate-400"
                breakLinkClassName="text-green-400"
                pageLinkClassName="text-slate-600"
                previousLinkClassName="text-slate-600"
                nextLinkClassName="text-slate-600"
                activeClassName="bg-primary text-white"
                containerClassName="flex justify-end mb-[20px]"
                forcePage={pageIndex}
                activeLinkClassName="text-white"
                marginPagesDisplayed={2}
                


            />
        </nav>
    )
}