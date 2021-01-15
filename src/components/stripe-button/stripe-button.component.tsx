import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }: any) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I9mB8AOLStYIv8Pl7LI7SGWtm713R6tA7ZSeThotLVrtVHnyXO2nkFAb1HuDfPrNIN7cPSrCO6cb1VWT1czgI4600DwzBlZQB';

    const onToken = (token: any) => {
        console.log(token)
        alert('Payment Successful')
    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;