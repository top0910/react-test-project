import SizeItem from "./SizeItem"

function SizeBar() {
    return <div className="size-bar">
        <SizeItem size={25} />
        <SizeItem size={50} />
        <SizeItem size={75} />
        <SizeItem size={100} />
    </div>
}

export default SizeBar;