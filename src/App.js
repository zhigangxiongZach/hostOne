import './App.css';

function App() {

    function renderProducts() {
        const products = [
            'IMG_6625.jpg', 'IMG_6628.jpg', 'IMG_6631.jpg', 'IMG_6634.jpg', 'IMG_6637.jpg', 'IMG_6640.jpg',
            'IMG_6643.jpg', 'IMG_6626.jpg', 'IMG_6629.jpg', 'IMG_6632.jpg', 'IMG_6635.jpg', 'IMG_6638.jpg',
            'IMG_6641.jpg', 'IMG_6644.jpg', 'IMG_6627.jpg', 'IMG_6630.jpg', 'IMG_6633.jpg', 'IMG_6636.jpg',
            'IMG_6639.jpg', 'IMG_6642.jpg',
            'IMG_9067.JPG', 'IMG_9070.JPG', 'IMG_9073.JPG', 'IMG_9062.JPG', 'IMG_9068.JPG', 'IMG_9071.JPG',
            'IMG_9063.JPG', 'IMG_9069.JPG', 'IMG_9072.JPG'
        ];

        const list = []

        for (const [i, product] of products.entries()) {
            list.push(
                <li>{i + 1}
                    <span> - </span>
                    <span>
                        <a href={'image/' + product}>
                            <img src={'image/' + product} height={window.innerHeight / 5}/>
                        </a>
                    </span>
                </li>
            );
        }
        ;
        const container = [];

        return (
            <div>
                <div>
                    <span><h2>Welcome to Xiong's Family Picture site:</h2></span>
                </div>
                {list}
            </div>
        )
    }

    return renderProducts();
}

export default App;
