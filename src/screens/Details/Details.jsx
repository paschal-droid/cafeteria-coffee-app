import React, { useEffect, useState } from 'react' 
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native'
import {useStore} from '../../store/store'
import globalStyles from '../../assets/styles/globalStyles'
import styles from './detailStyle'
import { ImageBackgroundInfo, PaymentCard } from '../../components'
import { Scaling } from '../../theme'
import { Routes } from '../../navigation/Routes'

// import styles from './detailStyle'



const Details = ({navigation, route}) => {
  const addToFav = useStore((state) => state.addToFavourites)
  const detailItem = useStore((state) => route.params.type == 'Coffee' ? state.coffeeList : state.beansList)[route.params.index]
  const addToCart = useStore((state) => state.addToCart)
  const removeFromFav = useStore((state) => state.removeFromFavourites)
  const totalCartPrice = useStore((state) => state.calculateCartPrice)
  const [price, setPrice] = useState(detailItem.prices[0])

  const toggleFavorite = (favorite, type, id) => {
    favorite ? removeFromFav(type, id) : addToFav(type, id)
  }

  const addToCartHandler = (item, price) => {
    const {id, index, name, roasted, imagelink_square, special_ingredient, type} = item
    addToCart({id, index, name, roasted, imagelink_square, special_ingredient, type, prices: [{...price, quantity: 1}]})
    totalCartPrice()
    navigation.navigate(Routes.Cart)
  }
  return (
    <View style={[globalStyles.screen]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{flexGrow: 1}}>
        <ImageBackgroundInfo
          bgImage={detailItem.imagelink_portrait}
          enableBackHandler={true}
          type={detailItem.type}
          id={detailItem.id}
          favorite={detailItem.favourite}
          name={detailItem.name}
          ingredients={[detailItem.ingredients, detailItem.special_ingredient]}
          avgRating={detailItem.average_rating}
          ratingCount={detailItem.ratings_count}
          navigateBack={() => navigation.pop()}
          toggleFavorite={toggleFavorite}
          roasted={detailItem.roasted}
          description={detailItem.description}
          prices={detailItem.prices}

        />
        
      {/* Description and CTA's */}
      <View style={styles.descriptionContainer}>
        <View style={styles.description}>
          <Text style={styles.descHeaderText}>Description</Text>
          <Text numberOfLines={3} style={styles.descText}>{detailItem.description}</Text>
        </View>
        <View style={styles.sizeContainer}>
          <Text style={styles.descHeaderText}>Size</Text>
          <View style={styles.sizeOptionContainer}>
          {detailItem.prices.map((item, i) => (
              <Pressable onPress={() => setPrice(item)} key={i} style={[styles.sizeOption, item.size == price.size && styles.sizeOptionFocused]}>
                <Text style={detailItem.type == 'Bean' ? styles.sizeOptionTextBean : styles.sizeOptionTextCoffee}>{item.size}</Text>
              </Pressable>
          ))}
          </View>
        </View>
      <PaymentCard onAction={() => addToCartHandler(detailItem, price)} title='Price' actionText='Add To Cart' price={price.price}  />
      </View>
      </ScrollView>
    </View>
  )
}

export default Details