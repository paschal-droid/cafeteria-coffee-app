import React, { useEffect, useState, useMemo, memo, useRef } from 'react'
import { View, StatusBar, ScrollView, FlatList, Text, ToastAndroid } from 'react-native'
import styles from './homeStyles'
import globalStyles from '../../assets/styles/globalStyles'
import { useStore } from '../../store/store'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import { Themes } from '../../theme'
import { CoffeeCard, Error, HeaderBar, HeaderDynamic, Search, Tabs } from '../../components'
import { Routes } from '../../navigation/Routes'


const Home = ({navigation}) => {
  const coffeeList = useStore((state) => state.coffeeList)
  const categoryList = useStore((state) => state.categoryList)
  const addToCart = useStore((state) => state.addToCart)
  const calculateCartPrice = useStore((state) => state.calculateCartPrice)

  const selectedId = useStore((state)=> state.selectedCategoryId)
  const updateSelectedCategoryId = useStore((state)=> state.updateSelectedCategoryId)
  const beansList = useStore((state) => state.beansList)
  const coffeeRef = useRef(null)
  
 const [categoryItems, setCategoryItems] = useState([])

useMemo(() =>  {const coffeeItems = coffeeList.filter((value) => value.categoryIds.includes(selectedId));
setCategoryItems(coffeeItems)}, [selectedId])


const tabBarHeight = useBottomTabBarHeight()

const [search, setSearch] = useState('')
const handleTextChange = searchValue => {
  setSearch(searchValue)
  handleSearch(searchValue)
}

const handleSearch = (param) => {
  if(param != ''){
    coffeeRef.current.scrollToOffset({animated: true, offset: 0})
    updateSelectedCategoryId(0)
    setCategoryItems([...coffeeList.filter((item) => item.name.toLowerCase().includes(search.toLowerCase())), ])
  }
}

const handleClose = () => {
  coffeeRef.current.scrollToOffset({animated: true, offset: 0})
  updateSelectedCategoryId(0)
  setCategoryItems([...coffeeList])
  setSearch('')
}

const handleAddToCart = (item) => {
  const {id, index, name, roasted, imagelink_square, special_ingredient, type} = item
  const price = item.prices[1]
  addToCart({id, index, name, roasted, imagelink_square, special_ingredient, type, prices: [{...price, quantity: 1}]})
  calculateCartPrice()
  ToastAndroid.showWithGravity(`${name} was added to cart`, ToastAndroid.SHORT, ToastAndroid.TOP)
}

// useEffect(() => {
//     const coffeeItems = coffeeList.filter((value) => value.categoryIds.includes(selectedId))
//     setCategoryItems(coffeeItems)
    
// }, [selectedId])
  // useStore.persist.clearStorage()

  return (
    <View style={[globalStyles.screen]}>
      <StatusBar backgroundColor={Themes.COLOR.primaryBrownHex} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        {/* Add Header */}
        <HeaderBar userName="Alexander" />
        <Search onClose={() => handleClose()} onSearch={() => handleSearch} handleTextChange={(val) => handleTextChange(val)} search={search}  />
        <View style={[styles.categories, globalStyles.app]}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({item}) => (
              <Tabs
                tabId={item.categoryId}
                onPress={() => {
                  updateSelectedCategoryId(item.categoryId);
                  // to return back to the first coffeecard child when a category is clicked
                  coffeeRef.current.scrollToOffset({animated: true, offset: 0})
                }}
                isInactive={item.categoryId !== selectedId}
                name={item.name}
              />
            )}
          />
          {/* Dynamic display of Coffee based on it's categories!  */}
           {coffeeList && (
            <View style={[styles.coffeeContainer]}>
            <FlatList
                horizontal
                ref={coffeeRef}
                showsHorizontalScrollIndicator={false}
                data={categoryItems}
                ListEmptyComponent={<Error errorMsg={'Oops! No Coffee was found'} />}
                renderItem={({item}) => (
                  <CoffeeCard
                    key={item.index}
                    prices={item.prices[1]}
                    name={item.name}
                    image={item.imagelink_square}
                    index={item.index}
                    onPress={() => {navigation.navigate(Routes.Details, {id: item.id, index: item.index, type: item.type})}}
                    onAddPress={() => handleAddToCart(item)}
                    specialIngredients={item.special_ingredient}
                    rating={item.average_rating}
                  />
                )}
              />
            </View>
           )}
       
        </View>
        
        {/* Coffee Beans Section */}
       <View style={[styles.beans]}>
          <View style={styles.beanTitleContainer}>
            <Text style={[styles.beanTitleText, globalStyles.app]}>Coffee beans</Text>
            {beansList.length > 0 && (
            <View style={[styles.coffeeBeansContainer]}>
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{marginBottom: tabBarHeight}}
                data={beansList}
                renderItem={({item}) => (
                <CoffeeCard
                  key={item.index}
                  prices={item.prices[1]}
                  name={item.name}
                  image={item.imagelink_square}
                  index={item.index}
                  onPress={() => {navigation.navigate(Routes.Details, {id: item.id, index: item.index, type: item.type})}}
                  onAddPress={() => handleAddToCart(item)}
                  specialIngredients={item.special_ingredient}
                  />
                  )}
                />
            </View>
        )}
          </View>
       </View>
      </ScrollView>
    </View>
  );
}

export default memo(Home)