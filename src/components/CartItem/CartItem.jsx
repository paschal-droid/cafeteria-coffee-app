import { View, Text, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import dummyImage from '../../assets/app_images/default_post.png'
import { CustomIcon } from '..'
import LinearGradient from 'react-native-linear-gradient'
import { Scaling, Themes } from '../../theme'



const CartItem = (props) => {
    return (
        <> 
        {props.prices.length != 1 ? (
        <LinearGradient useAngle={true} angle={45} angleCenter={{ x: 0.4, y: 0.1 }} style={styles.cartSection} colors={[Themes.COLOR.linearGradientColor1,Themes.COLOR.linearGradientColor2, Themes.COLOR.linearGradientColor1]}>
            <View style={styles.mainSection}>
                
                    <View style={styles.section1}>
                        <View style={styles.cartImageContainer}>
                            <ImageBackground style={styles.cartItemImage2} source={props.imageLink}></ImageBackground>
                        </View>
                        <View style={styles.cartActionsTextContainer}>
                            <Text style={styles.actionTitle}>{props.title}</Text>
                            <Text style={styles.actionText}>{props.specialIngredient}</Text>
                            <View style={styles.cartActionsRoastedContainer}>
                                <Text style={styles.cartActionsRoastedText}>{props.roasted}</Text>
                            </View>
                        </View>
                    </View>
                    {props.prices.map((item, i) => (
                        <View key={i} style={styles.section2}>
                            <View style={styles.cartActionsVariantsContainer2}>
                                <View style={styles.variantSize}>
                                    <Text style={[styles.variantSizeText, item.size.length > 1 && { fontSize: Scaling.fontScale(10) }]}>{item.size}</Text>
                                </View>
                                <View style={styles.variantPrice}>
                                    <Text style={styles.variantCurrencyText2}>{item.currency}</Text>
                                    <Text style={styles.variantPriceText2}>{item.price}</Text>
                                </View>
                            </View>
                            <View style={styles.cartActionsQuantityContainer2}>
                                <Pressable onPress={() => props.decrementQuantity(props.id, item.size)} style={styles.quantity}>
                                    <CustomIcon name='minus' />
                                </Pressable>
                                <View style={styles.quantityValue}>
                                    <Text style={styles.quantityValueText}>{item.quantity}</Text>
                                </View>
                                <Pressable onPress={() => props.incrementQuantity(props.id, item.size)} style={styles.quantity}>
                                    <CustomIcon name='add' />
                                </Pressable>
                            </View>
                        </View>
                        ))}
                        </View>
                        </LinearGradient>
                      )
                    : (
                    <LinearGradient useAngle={true} angle={45} angleCenter={{ x: 0.4, y: 0.1 }} style={styles.cartSection} colors={[Themes.COLOR.linearGradientColor1, Themes.COLOR.linearGradientColor2, Themes.COLOR.linearGradientColor1]}>
                        <View style={styles.cartItemMainSection}>
                            <View style={styles.cartImageContainer}>
                                <ImageBackground style={styles.cartItemImage} source={props.imageLink}></ImageBackground>
                            </View>
                            <View style={styles.cartActionsContainer}>
                                <View style={styles.cartActionsTextContainer}>
                                    <Text style={styles.actionTitle}>{props.title}</Text>
                                    <Text style={styles.actionText}>{props.specialIngredient}</Text>
                                </View>
                                <View style={styles.cartActionsVariantsContainer}>
                                    <View style={styles.variantSize}>
                                        <Text style={[styles.variantSizeText, props.prices[0].size.length > 1 && { fontSize: Scaling.fontScale(10) }]}>{props.prices[0].size}</Text>
                                    </View>
                                    <View style={styles.variantPrice}>
                                        <Text style={styles.variantCurrencyText}>{props.prices[0].currency}</Text>
                                        <Text style={styles.variantPriceText}>{props.prices[0].price}</Text>
                                    </View>
                                </View>
                                <View style={styles.cartActionsQuantityContainer}>
                                    <Pressable onPress={() =>props.decrementQuantity(props.id, props.prices[0].size)} style={styles.quantity}>
                                        <CustomIcon name='minus' />
                                    </Pressable>
                                    <View style={styles.quantityValue}>
                                        <Text style={styles.quantityValueText}>{props.prices[0].quantity}</Text>
                                    </View>
                                    <Pressable onPress={() => props.incrementQuantity(props.id, props.prices[0].size)} style={styles.quantity}>
                                        <CustomIcon name='add' />
                                    </Pressable>
                                </View>
                            </View>
                        </View>
                    </LinearGradient>
                )
                }
                </>
            
        )
}

CartItem.propTypes = {
    id: PropTypes.string.isRequired, 
    title: PropTypes.string.isRequired, 
    imageLink: PropTypes.any.isRequired, 
    roasted: PropTypes.string.isRequired, 
    prices: PropTypes.array.isRequired, 
    incrementQuantity: PropTypes.func.isRequired, 
    type: PropTypes.string.isRequired, 
    specialIngredient: PropTypes.string.isRequired, 
    decrementQuantity: PropTypes.func.isRequired
}

CartItem.defaultProps ={
    decrementQuantity: () => {},
    incrementQuantity: () => {},
    image: dummyImage
}



//todo the normal cartItem

export default CartItem