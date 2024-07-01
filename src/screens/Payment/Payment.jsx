import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import styles from './paymentStyles'
import { ScrollView } from 'react-native'
import globalStyles from '../../assets/styles/globalStyles'
import { Themes } from '../../theme'
import { CreditCard, HeaderDynamic, PaymentCard, PaymentMethod, PopupAnimation } from '../../components'
import { useStore } from '../../store/store'
import { Routes } from '../../navigation/Routes'


const paymentList = [
  {
    name: "Wallet",
    icon: 'icon',
    isIcon: true
  },
  {
    name: "Google Pay",
    icon: require('../../assets/app_images/gpay.png'),
    isIcon: false
  },
  {
    name: "Apple Pay",
    icon: require('../../assets/app_images/applepay.png'),
    isIcon: false
  },
  {
    name: "Amazon Pay",
    icon: require('../../assets/app_images/amazonpay.png'),
    isIcon: false
  },
]


const Payment = ({ navigation }) => {
  const [paymentMode, setPaymentMode] = useState("Credit Card")
  const [showAnimation, setShowAnimation] = useState(false)
  const cartPrice = useStore((state) => state.cartPrice)
  const calculateCartPrice = useStore((state) => state.calculateCartPrice)
  const addToOrderHistoryList = useStore((state)=> state.addToOrderHistoryList)

  const makePayment = () => {
    setShowAnimation(true);

    addToOrderHistoryList();

    calculateCartPrice();

    setTimeout(() => {
      setShowAnimation(false)
      navigation.navigate(Routes.Order)
    }, 3000)

  }

  return (
    <View style={[globalStyles.screen]}>
      {showAnimation && <PopupAnimation style={styles.lottieStyles} source={require('../../lottie/successful.json')} />}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.innerScreen}>
          <View style={styles.paymentHeader}>
            <HeaderDynamic goBack={() => navigation.pop()} enableBack={true} extraContainerStyle={styles.header} icon='left' title='Payment' needProfile={false} />
            <View style={styles.paymentOptionContainer}>
              <Pressable onPress={() => setPaymentMode("Credit Card")} style={[styles.creditCardContainer, {borderColor: paymentMode == 'Credit Card' ? Themes.COLOR.primaryPinkHex : Themes.COLOR.primaryGreyHex}]}>
                <Text style={styles.creditCardText}>Credit Card</Text>
                <CreditCard />
              </Pressable>
              {paymentList.map((item, i) => (
                <Pressable onPress={() => setPaymentMode(item.name)} key={i.toString()}>
                  <PaymentMethod paymentMode={paymentMode} name={item.name} icon={item.icon} isIcon={item.isIcon} />
                </Pressable>
              ))}
            </View>
          </View>
          <View style={styles.paymentFooter}>
            <PaymentCard actionText={`Pay With ${paymentMode}`} title='Total Price' price={cartPrice} onAction={() => makePayment()} />

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Payment