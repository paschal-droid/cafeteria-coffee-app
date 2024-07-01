import { ImageBackground, Pressable, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import {Scaling, Themes } from '../../theme'
import LinearGradient from 'react-native-linear-gradient'
import styles from './coffeeCardStyles'
import dummyImage from '../../assets/app_images/default_post.png'
import { CustomIcon } from '..'



const CoffeeCard = (props) => {
    return (
    <LinearGradient useAngle={true} angle={105} angleCenter={{ x: 0.4, y: 0.1 }} style={styles.coffeeCard} colors={[Themes.COLOR.linearGradientColor1,Themes.COLOR.linearGradientColor2, Themes.COLOR.linearGradientColor1]} >
    <Pressable onPress={props.onPress} style={styles}>
      <View style={styles.imageContainer}>
        <ImageBackground  style={styles.coffeeImage} source={props.image}>
        {props.rating && <View style={styles.ratings}>
          <CustomIcon name='star' color={Themes.COLOR.primaryPinkHex} size={Scaling.fontScale(12)} />
          <Text style={styles.ratingsText}>{(props.rating.toString())}</Text>
        </View>}
        </ImageBackground>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerText}>{props.name}</Text>
        <Text style={styles.text}>{props.specialIngredients}</Text>
      </View>
      <View style={styles.actions}>
        <Text style={styles.price}><Text style={{color: Themes.COLOR.primaryPinkHex}}>$</Text> {(props.prices.price)}</Text>
        <TouchableOpacity onPress={props.onAddPress} style={styles.addButton}>
          <CustomIcon name='add' size={Scaling.fontScale(12)} color={Themes.COLOR.primaryLightWhiteHex} />
        </TouchableOpacity>
      </View>
    </Pressable>
    </LinearGradient>
  )
}

CoffeeCard.propTypes = {
  name: PropTypes.string.isRequired,
  specialIngredients: PropTypes.string.isRequired,
  prices: PropTypes.object,
  rating: PropTypes.number,
  image: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  onAddPress: PropTypes.func,
  onPress: PropTypes.func,
}

CoffeeCard.defaultProps = {
  onPress: () => {},
  onAddPress: () => {},
  image: dummyImage
}


export default CoffeeCard

