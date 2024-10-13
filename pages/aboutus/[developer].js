import { useRouter } from "next/router";

const Developer = () => {
    const router = useRouter();
    const details = [
        { id: 1, name: 'Yash', role: 'Senior Developer'},
        { id: 2, name: 'Vaibhav', role: 'Backend Developer'},
        { id: 3, name: 'Suresh', role: 'Frontend Developer'}
        ];

    let info;
    let textToShow;
    if (router.query.developer) {
        info = details.filter((item) => item.id == router.query.developer);
    }
    if (!info) {
        textToShow = 'Developer not found';
    }
    else {
        textToShow = `${info[0].name} ${info[0].role}`;
    }
    
    return (
        <h1>{textToShow}</h1>
    )
}

export default Developer