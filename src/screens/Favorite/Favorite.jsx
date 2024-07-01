import React, { useEffect } from 'react'
import { View, Text, ScrollView } from 'react-native'
import styles from './favStyles';
import globalStyles from '../../assets/styles/globalStyles'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { EmptyCartAnimation, HeaderDynamic, ImageBackgroundInfo } from '../../components';
import { useStore } from '../../store/store';
import LinearGradient from 'react-native-linear-gradient';
import { Themes } from '../../theme';


const Favourite = ({navigation}) => {
  const tabBarHeight = useBottomTabBarHeight()
  const favoriteList = useStore((state) => state.favoritesList)
  const removeFromFav = useStore((state) => state.removeFromFavourites)
  const addToFav = useStore((state) => state.addToFavourites)
  const reset = useStore((state) => state.resetAll)

  // useEffect(() => {
  //   reset()
  // }, [])

  const toggleFavorite = (favorite, type, id) => {
    favorite ? removeFromFav(type, id) : addToFav(type, id)
  }

  return (
    <View style={[globalStyles.screen]}>
      <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
        <View style={[styles.innerScreen, {marginBottom: tabBarHeight}]}>
          <HeaderDynamic enableBack={false} icon='menu' needProfile={true} title='Favorites' />
           {favoriteList.length != 0 ? favoriteList.map((detailItem, i) => {
            return (
             <View key={i} style={styles.favoritesContainer}>
               <ImageBackgroundInfo
                 bgImage={detailItem.imagelink_portrait}
                 enableBackHandler={false}
                 type={detailItem.type}
                 id={detailItem.id}
                 favorite={detailItem.favourite}
                 name={detailItem.name}
                 ingredients={[detailItem.ingredients, detailItem.special_ingredient]}
                 avgRating={detailItem.average_rating}
                 ratingCount={detailItem.ratings_count}
                 roasted={detailItem.roasted}
                 description={detailItem.description}
                 prices={detailItem.prices}
                 toggleFavorite={toggleFavorite}

               />
               <LinearGradient useAngle={true} angle={90} angleCenter={{ x: 0.4, y: 0.1 }} colors={[Themes.COLOR.linearGradientColor1, Themes.COLOR.linearGradientColor2]}>
               <View style={styles.descriptionContainer}>
                 <View style={styles.description}>
                   <Text style={styles.descHeaderText}>Description</Text>
                   <Text numberOfLines={3} style={styles.descText}>{detailItem.description}</Text>
                 </View>
               </View>
               </LinearGradient>
             </View>
           )}): (<View style={styles.noFavoritesContainer}>
            <EmptyCartAnimation title='No Favorites here!' />
           </View>) }

        </View>
      </ScrollView>
    </View>
  )
}

Favourite.propTypes = {

}

export default Favourite