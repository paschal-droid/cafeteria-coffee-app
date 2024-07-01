import React, {useRef, useState} from 'react'
import { Pressable, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import globalStyles from '../assets/styles/globalStyles'
import propTypes from 'prop-types'
import { FontWeight, Icons, Scaling, Themes } from '../theme'
import { CustomIcon } from '.'

const Search = (props) => {
    const textInputRef = useRef(null)
    // const [search, setSearch] = useState('')

    const handleFocus = () => {
        textInputRef.current.focus()
    }

    // const handleTextChange = searchValue => {
    //     setSearch(searchValue)
    //     props.onSearch(searchValue)
    //     props.onClose(searchValue)
    // }

  return (
   <Pressable onPress={handleFocus}  style={[styles.searchInputContainer, globalStyles.app]}>
    <TouchableOpacity onPress={props.onSearch}>
    <CustomIcon name='search' size={Scaling.fontScale(28)} color={props.search.length > 0 ? Themes.COLOR.primaryPinkHex : Themes.COLOR.primaryLightWhiteHex} />
    </TouchableOpacity>
    <TextInput value={props.search} placeholderTextColor={Themes.COLOR.primaryLightWhiteHex} onChangeText={(value) => props.handleTextChange(value)} ref={textInputRef} placeholder='Find Your Coffee...' style={styles.searchInput} />
    <Pressable onPress={props.onClose}>
        {props.search.length > 0 && <CustomIcon style={styles.closeIcon}  name='close' size={15} />}
    </Pressable>
   </Pressable>
  )
}

Search.defaultProps = {
    onSearch: () => {},
    onClose: () => {},
}

Search.propTypes = {
    onSearch: propTypes.func,
    onClose: propTypes.func,
    handleTextChange: propTypes.func,
    search: propTypes.string
}


const styles = StyleSheet.create({
    searchInput: {
        flex: 1,
        marginLeft: Scaling.horizontalScale(16),
        fontFamily: FontWeight('Poppins', '500'),
        fontSize: Scaling.fontScale(14),
        lineHeight: Scaling.horizontalScale(14),
        letterSpacing: .28,
        color: Themes.COLOR.primaryLightWhiteHex,
    },
    searchInputContainer: {
        flexDirection: 'row',
        paddingLeft: Scaling.horizontalScale(22),
        height: Scaling.verticalScale(45),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Themes.COLOR.primaryLightBrownHex,
        borderRadius: Scaling.horizontalScale(15),
        textAlign: 'center'
    },
    closeIcon: {
        color: Themes.COLOR.primaryLightWhiteHex,
        marginRight: Scaling.horizontalScale(10)
    },
})

export default Search