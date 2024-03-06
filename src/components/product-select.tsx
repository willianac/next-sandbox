import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

type ProductSelectProps = {
	trigger: string
	items: {
		label: string | number
		value: string
	}[]
}

function ProductSelect({trigger, items}: ProductSelectProps) {
	return (
		<Select>
			<SelectTrigger className="w-full">
				<SelectValue placeholder={trigger} />
			</SelectTrigger>
			<SelectContent>
				{items.map(item => (
					<SelectItem key={item.value} value={item.value}>{item.label}</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}

export default ProductSelect;