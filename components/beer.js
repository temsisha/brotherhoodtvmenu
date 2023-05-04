import { urlFor } from "../lib/sanity";

export default function Beer ({beer}){
    const {beerName,
        beerType,
        beerABV,
        beerIBU,
        beerLowPrice,
        beerHighPrice,
        breweryLogo,
        newBeer,
        soldBeer,} = beer;
    return (
        <div className="article-group">
            <div className="logo">
                <img src={urlFor(beer.breweryLogo)} alt="" />
            </div>
            <div className="brand">
            <div className="brand-visability">
                <div className="brand-name">{beerName}</div>
                <div className={newBeer ? "notify-badge" : ""}> {newBeer ? "NEW" : ""}</div>
                <div className={soldBeer ? "notify-badge-sold" : ""}> {soldBeer ? "SOLD OUT" : ""}</div>
            </div>
                <div className="brand-details">
                    <div className="brand-type">{beerType} <span className="separator">|</span> ABV <span className="type-detailed">{beerABV}</span> <span className="separator">|</span> IBU <span className="type-detailed">{beerIBU}</span></div>
                </div>
            </div>
            <div className="brand-price">
                <div className="price-tap-small">TAP 0.3 RSD {beerLowPrice}</div>
                <div className="brand-price-big">TAP 0.5 RSD {beerHighPrice}</div>
            </div>
        </div>
    )
}
