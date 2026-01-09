interface TechboxProps {
    name: string;
    logoUrl: string;
    onSelect?: () => void;
}
export default function Techbox({ name, logoUrl, onSelect}: TechboxProps) {

    return (
        <div className="flex flex-col justify-center items-center gap-4 w-30 h-30 border rounded-xl hover:bg-gray-100 cursor-pointer">
            <img src={logoUrl} alt={`${name} logo`} className="w-10 h-10" />
            <div>
                <h4 className="font-bold">{name}</h4>
            </div>
        </div>
    )
}