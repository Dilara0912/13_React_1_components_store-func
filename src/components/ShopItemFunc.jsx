export function ShopItemFunc({ shopItem }) {
  return (
    <div className="container">
      <div className="window">
        <div className="highlight-window">
          <div className="highlight-overlay"></div>
        </div>
        <div className="main-content">
          <h2>{shopItem.brand}</h2>
          <h1>{shopItem.title}</h1>
          <h3>{shopItem.description}</h3>
          <div className="description">{shopItem.descriptionFull}</div>
          <div className="divider"></div>
          <div className="purchase-info">
            <div className="price">{shopItem.currency} {shopItem.price.toFixed(2)}</div>
            <button>Добавить в корзину</button>
          </div>
        </div>
      </div>
      <div className="highlight-window mobile">
        <div className="highlight-overlay"></div>
      </div>
    </div>
  );
}