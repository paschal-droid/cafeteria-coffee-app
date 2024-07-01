import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'
import { FontWeight, Scaling, Themes } from '../../theme'
import { CustomIcon, GradientIcon } from '..'
import styles from './styles'

const ImageBackgroundInfo = (props) => {
  return (
    <View>
      <ImageBackground style={[styles.background, props.bgStyles]} source={props.bgImage}>
        {props.enableBackHandler ? (
          <View style={styles.headerBarWithBack}>
            <Pressable onPress={props.navigateBack}>
              <GradientIcon
                name={'left'}
                color={Themes.COLOR.secondaryBrownHex}
                size={Scaling.fontScale(20)}
              />
            </Pressable>
            <Pressable onPress={() => props.toggleFavorite(props.favorite, props.type, props.id)}>
              <GradientIcon
                name={'like'}
                color={
                  props.favorite
                    ? Themes.COLOR.primaryPinkHex
                    : Themes.COLOR.secondaryBrownHex
                }
                size={Scaling.fontScale(20)}
              />
            </Pressable>
          </View>
        ) : (
          <View style={styles.headerBarWithoutBack}>
            <Pressable onPress={() => props.toggleFavorite(props.favorite, props.type, props.id)}>
              <GradientIcon
                name={'like'}
                color={
                  props.favorite
                    ? Themes.COLOR.primaryPinkHex
                    : Themes.COLOR.secondaryBrownHex
                }
                size={Scaling.fontScale(20)}
              />
            </Pressable>
          </View>
        )}
        <View style={styles.backgroundContainerInfo}>
          <View style={styles.backgroundInnerContainerInfo}>
            <View style={styles.background1InfoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.headerText}>{props.name}</Text>
                <Text style={styles.text}>{props.ingredients[1]}</Text>
              </View>
              <View style={styles.coffeeIcons}>
                <View style={styles.icons}>
                  <CustomIcon color={Themes.COLOR.primaryPinkHex} name={props.type == 'Bean' ? 'bean' : 'beans'} size={props.type == 'Bean' ? Scaling.fontScale(26) : Scaling.fontScale(32)} />
                  <Text style={styles.iconText}>{props.type}</Text>
                </View>
                <View style={styles.icons}>
                  <CustomIcon color={Themes.COLOR.primaryPinkHex} name={props.type == 'Bean' ? 'location' : 'drop'} size={Scaling.fontScale(26)} />
                  <Text style={styles.iconText}>{props.ingredients[0]}</Text>
                </View>
              </View>
            </View>
            <View style={styles.background2InfoContainer}>
              <View style={styles.ratings}>
                <CustomIcon size={Scaling.fontScale(22)} color={Themes.COLOR.primaryPinkHex} name='star' />
                <Text style={styles.mainText}>{props.avgRating}</Text>
                <Text style={styles.miniText}>({props.ratingCount})</Text>
              </View>
              <View style={styles.roastedContainer}>
                <Text style={styles.roastedText}>{props.roasted}</Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

ImageBackgroundInfo.propTypes = {
  bgImage: PropTypes.any.isRequired,
  enableBackHandler: PropTypes.bool.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  favorite: PropTypes.bool,
  name: PropTypes.string.isRequired,
  ingredients: PropTypes.array.isRequired,
  avgRating: PropTypes.number.isRequired,
  ratingCount: PropTypes.string.isRequired,
  roasted: PropTypes.string.isRequired,
  navigateBack: PropTypes.func,
  toggleFavorite: PropTypes.any,
  description: PropTypes.string,
  bgStyles: PropTypes.object,
  prices: PropTypes.array.isRequired

}

ImageBackgroundInfo.defaultProps = {
  navigateBack: () => { }
}
export default ImageBackgroundInfo

