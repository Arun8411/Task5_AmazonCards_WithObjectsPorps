import "./App.css";

const arr = [
  {
    imgCard:
      "https://m.media-amazon.com/images/I/71L+JnVXFTL._AC_UY327_FMwebp_QL65_.jpg",
    title:
      "Xiaomi 108 cm (43 inches) X Series 4K Ultra HD Smart Google TV L43M8-A2IN (Black)",
    extraInformation: "1K+ bought in past month",
    price: "₹26,499 M.R.P: ₹42,999 (38% off)",
    discountInfo:"Save extra with No Cost EMI",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/71N7mwf1C7L._AC_UY327_FMwebp_QL65_.jpg",
    title: "TCL 139 cm (55 inches) Metallic Bezel-Less Series 4K Ultra HD Smart LED Google TV 55V6B (Black)",
    extraInformation: "Limited time deal",
    price: "₹37,990 M.R.P: ₹77,990 (51% off)",
    discountInfo:"Save extra with No Cost EMI",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },

  {
    imgCard:
      "https://m.media-amazon.com/images/I/713A5VksK6L._AC_UY327_FMwebp_QL65_.jpg",
    title: "MI 80 cm (32 inches) A Series HD Ready Smart Google TV L32M8-5AIN (Black)",
    extraInformation: "5K+ bought in past month",
    price: "₹12,499 M.R.P: ₹24,999 (50% off)",
    discountInfo:"Up to 5% back with Amazon Pay ICICI card",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },

  {
    imgCard:
      "https://m.media-amazon.com/images/I/71S8iUPW9bL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung 80 cm (32 inches) HD Ready Smart LED TV UA32T4380AKXXL (Glossy Black)",
    extraInformation: "4K+ bought in past month",
    price: "₹14,990 M.R.P: ₹18,900 (21% off)",
    discountInfo:"Save extra with No Cost EMI",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/812v525aLdL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Kodak 80 cm (32 inches) Special Edition Series HD Ready Smart LED TV 32SE5001BL (Black)",
    extraInformation: "500+ bought in past month",
    price: "₹8,499 M.R.P: ₹14,999 (43% off)",
    discountInfo:"Up to 5% back with Amazon Pay ICICI card",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/819Lw2PE8tL._AC_UY327_FMwebp_QL65_.jpg",
    title:
      "Redmi 80 cm (32 inches) F Series HD Ready Smart LED Fire TV L32R8-FVIN (Black)",
    extraInformation: "2K+ bought in past month",
    price: "₹12,499 M.R.P: ₹24,999 (50% off) ",
    discountInfo:"Save extra with No Cost EMIUp to 5% back with Amazon Pay ICICI cardUp to 5% back with Amazon Pay ICICI card",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/819SRH2DKBL._AC_UY327_FMwebp_QL65_.jpg",
    title: "OnePlus 108 cm (43 inches) Y Series 4K Ultra HD Smart Android LED TV 43Y1S Pro (Black)",
    extraInformation: "Prime Video ",
    price: "₹22,999 M.R.P: ₹39,999 (43% off)",
    discountInfo:"Save extra with No Cost EMI",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/71qYTCZ+jrL._AC_UY327_FMwebp_QL65_.jpg",
    title: "VW 109 cm (43 inches) Linux Series Frameless Full HD Smart LED TV VW43S1 (Black)",
    extraInformation: "Prime Video ",
    price: "₹13,999 M.R.P: ₹25,999 (46% off) ",
    discountInfo:"Up to 5% back with Amazon Pay ICICI card",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/71RxCmvnrbL._AC_UY327_FMwebp_QL65_.jpg",
    title: "Samsung 80 cm (32 Inches) Wondertainment Series HD Ready LED Smart TV UA32T4340BKXXL (Glossy Black)",
    extraInformation: "2K+ bought in past month",
    price: "₹14,990 M.R.P: ₹22,900 (35% off)",
    discountInfo:"Save extra with No Cost EMI",
    deliveryInfo:"FREE delivery as soon as Sat, 18 May, 7"
  },
  {
    imgCard:
      "https://m.media-amazon.com/images/I/81SYE9YcekL._AC_UY327_FMwebp_QL65_.jpg",
    title: "VW 109 cm (43 inches) Playwall Frameless Series Full HD Android Smart LED TV VW43F1 (Black)",
    extraInformation: "500+ bought in past month",
    price: "₹14,999 M.R.P: ₹24,999 (40% off)",
    discountInfo:"Up to 5% back with Amazon Pay ICICI card",
    deliveryInfo:"FREE delivery as soon as 24 May, 7 am - 3pm"
  },
];
function App() {
  return (
    <div
      style={{
        display: "flex",
        flexwrap: "flex-wrap",
        gap: "15px",
        marginLeft: "15px",
        marginBottom: "15px",
        marginTop: "15px",
      }}
    >
      {arr.map((e) => {
        return (
          <div
            style={{
              border: "20px solid #0000",
              marginBottom: "20px",
              width: "250px",
            }}
          >
            <img height={"220px"} width={"300px"} src={e.imgCard} alt=""></img>
            <h4>{e.title}</h4>
            <p style={{fontSize:"10px"}}>{e.extraInformation}</p>
            <h2>{e.price}</h2>
            <p style={{fontSize:"12px"}}>{e.discountInfo}</p>
            <p style={{fontSize:"12px"}}>{e.deliveryInfo}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
