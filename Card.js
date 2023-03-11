class Card{
  constructor(
    imageSource,
    cardTitle,
    cardDescription,
    cardDiscount,
    cardOriginal,
    cardDiscounted
  ){
    this.imageSource = imageSource,
    this.cardTitle = cardTitle, 
    this.cardDescription = cardDescription,
    this.cardDiscount = cardDiscount,
    this.cardOriginal = cardOriginal,
    this.cardDiscounted = cardDiscounted
    //cardDiscounted = (cardOriginal - (cardOriginal * (cardDiscount/100)));
    /// maybe method to calculate card original and discounted prices
  };
}

export default Card;

