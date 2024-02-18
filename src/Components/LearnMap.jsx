
const LearnMap = () => {
    const items = ['HTML 5', 'CSS 3', 'JavaScript', 'ReactJS', 'Next JS', 'Node', 'Express'];
    return (
        <>
            <ul>
                {
                    items.map((itemm, i) => (
                        <li key={i}> {i} --- {itemm}</li>
                    ))
                }
            </ul>
        </>
    )
}

export default LearnMap