import SelectDropdown from 'react-native-select-dropdown'
import { StyleSheet, View } from 'react-native';
import { Text } from '@ui-kitten/components';

type Props = {
    data: Data[]
}

type Data = {
    title: string
}
const Dropdown = (props: Props) => {
    return (
        <SelectDropdown
            data={props.data}
            onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            }}
            renderButton={(selectedItem, isOpened) => {
            return (
                <View style={styles.dropdownButtonStyle}>
                {/* {selectedItem && (
                    <Icon name={selectedItem.icon} style={styles.dropdownButtonIconStyle} />
                )} */}
                <Text style={styles.dropdownButtonTxtStyle}>
                    {(selectedItem && selectedItem.title) || 'Today'}
                </Text>
                {/* <Icon name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} /> */}
                </View>
            );
            }}
            renderItem={(item, index, isSelected) => {
            return (
                <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
                 
                <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
                </View>
            );
            }}
            showsVerticalScrollIndicator={false}
            dropdownStyle={styles.dropdownMenuStyle}
        />
    )
}

export default Dropdown;

const styles = StyleSheet.create({
dropdownButtonStyle: {
    width: 120,
    height: 40,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
},
dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    color: '#151E26',
},
dropdownButtonArrowStyle: {
    fontSize: 28,
},
dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
},
dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
},
dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
},
dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
},
dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
},
});