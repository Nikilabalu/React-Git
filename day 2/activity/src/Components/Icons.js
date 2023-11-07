import {ArrowUp,ArrowDownToLine,ArrowDownUp,ArrowDownRight,BarChart4,Beaker,BedDouble,BookmarkCheck,Carrot,ChevronDownCircle,ChevronsRightLeft,CloudRainWind,Coffee,Cross,Crown,Download} from "lucide-react";
const Icons=()=>{
    return(
        <>
        <table border="5px" width="300" height="200">
            <tr align="center" >
                <td ><ArrowUp /></td>
                <td><ArrowDownToLine /></td>
                <td><ArrowDownUp strokeWidth={1.25} /></td>
                <td><ArrowDownRight strokeWidth={1.25} /></td>
            </tr>
            <tr align="center">
                <td ><BarChart4 strokeWidth={1.25} /></td>
                <td><Beaker strokeWidth={0.75} /></td>
                <td><BedDouble strokeWidth={0.75} /></td>
                <td><BookmarkCheck strokeWidth={0.75} /></td>
            </tr>
            <tr align="center">
                <td><Carrot strokeWidth={0.75} /></td>
                <td><ChevronDownCircle strokeWidth={0.75} /></td>
                <td><ChevronsRightLeft strokeWidth={0.75} /></td>
                <td><CloudRainWind strokeWidth={0.75} /></td>
            </tr>
            <tr align="center">
                <td><Coffee strokeWidth={0.75} /></td>
                <td><Cross strokeWidth={0.75} /></td>
                <td><Crown strokeWidth={0.75} /></td>
                <td><Download strokeWidth={0.75} /></td>
            </tr>
        </table>
        </>
    )
}
export default Icons;