import useLocalStorage from "../../hooks/useLocalStorage";

function Exercise2() {
    const [name, setName] = useLocalStorage("name", "F8 User");
    const [name2, setName2] = useLocalStorage("name2", "lốp trưởng");
    const [name3, setName3] = useLocalStorage("name3", "Michelin Boy");
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <p>Xin chào, {name}!</p>
            <input value={name2} onChange={(e) => setName2(e.target.value)}/>
            <p>Xin chào, {name2}!</p>
            <input value={name3} onChange={(e) => setName3(e.target.value)}/>
            <p>Xin chào, {name3}!</p>
        </div>
    );
}

export default Exercise2;
