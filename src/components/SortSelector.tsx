import { Button, Menu,MenuButton,MenuItem,MenuList } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"

interface Props{
    onSelectSort: (value: string) => void;
    selectedOrdering: string
}
export default function SortSelector({onSelectSort,selectedOrdering}:Props) {
    const sortOrder = [
        {value:'',label:'Relevance'},
        {value: '-added',label: 'Date Added'},
        {value: 'name',label: 'Name'},
        {value: '-released',label: 'Release Date'},
        {value: '-metacritic',label: 'Popularity'},
        {value: '-rating',label: 'Average Rating'},
    ]
    const getSortingName = sortOrder.find((s) => s.value === selectedOrdering);
  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
            Order By: {getSortingName?.label || 'Relevance'}
        </MenuButton>
        <MenuList>
            {sortOrder.map((order) => (
                <MenuItem key={order.label} value={order.value} onClick={() => onSelectSort(order.value)}>{order.label}</MenuItem>
            ))}
        </MenuList>
    </Menu>
  )
}
