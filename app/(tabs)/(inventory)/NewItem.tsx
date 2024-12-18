import { View, TextInput, ScrollView, Button, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import styles, { blackLightShade } from '../../styles/style';
import { useForm, Controller } from "react-hook-form";
import { SelectList } from "react-native-dropdown-select-list";
import { Layout, } from "@ui-kitten/components";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';

const NewItem = () => {
    const { control, handleSubmit, formState: {errors} } = useForm();
    const [image, setImage] = useState('');

    const handleChoosePhoto = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            allowsEditing: true,
            aspect: [5, 5],
            quality: 1,
            mediaTypes: ImagePicker.MediaTypeOptions.Images
        });
      
        if (!result.canceled) {
            setImage(result?.assets?.[0]?.uri);
        }
        if (result?.assets?.[0]?.uri) setImage(result?.assets?.[0]?.uri);
       
    };
    const submitHandler = (data: any) => {
        console.log(`data`, data);
    }


   
    const data = [
        {
            key: 1, value: 'Foods',
        },
        {
            key: 2, value: 'Soft Drinks',
        },
        {
            key: 3, value: 'FISH',
        },
        {
            key: 3, value: 'JUICE',
        },
        {
            key: 3, value: 'SABON',
        },
        {
            key: 3, value: 'CIGGARE',
        },
        {
            key: 3, value: 'Alcohol',
        },
    ]
    
    return (
        <ScrollView>
            <View style={{}}>
                <TouchableOpacity onPress={handleChoosePhoto}>
                    <View style={localStyle.itemImageContainer}>
                        { 
                            !image ? (
                                <View style={{flex: 1, justifyContent:'center', alignItems: 'center'}}>
                                    <Ionicons name="cloud-upload-outline" size={28} color={blackLightShade}/>
                                    <Text style={{color: blackLightShade}}>Upload Image</Text>
                                </View>
                            ) : (
                                <Image width={250} height={250} source={{uri: image}} />
                            )
                        }
                        
                    </View>
                </TouchableOpacity>
                <View style={[styles.card]}>
                    <Layout>
                        <Controller 
                            name="itemName"
                            control={control}
                            render={({field: {onChange, value, onBlur}}) => ( 
                                <View style={styles.formGroup}>
                                    <TextInput 
                                        placeholder="Item Name" 
                                        style={styles.input}
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={value => onChange(value)}
                                    />
                                    { (errors as any)?.itemName?.message && <Text style={styles.textDanger}>{(errors as any)?.itemName?.message}</Text>}
                                </View> 
                            )}
                            rules={{required: 'Item Name is required'}}
                        />
                    </Layout>
                    <Layout>
                        <Controller 
                            name="description"
                            control={control}
                            render={({field: {onChange, value, onBlur}} ) => (
                                <View style={styles.formGroup}>
                                    <TextInput 
                                        placeholder="Description" 
                                        style={styles.input}
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={value => onChange(value)}
                                    />
                                    { (errors as any)?.description?.message && <Text style={styles.textDanger}>{(errors as any)?.description?.message}</Text>}
                                </View>
                            )}
                            rules={{required: 'Description is required'}}
                        />
                    </Layout>
                    <Controller 
                        name="category"
                        control={control}
                        render={({field: {onChange, value, onBlur}}) => (
                            <View style={styles.formGroup}>
                                <SelectList 
                                    setSelected={(val: string) => (onChange(val))}
                                    data={data}
                                    save="value"
                                    boxStyles={styles.input}
                                    placeholder="Select Category"
                                />
                                { (errors as any)?.category?.message && <Text style={styles.textDanger}>{(errors as any)?.category?.message}</Text>}
                            </View>
                        )}
                        rules={{required: 'Category is required'}}
                    />
                    <Controller 
                        name="supplier"
                        control={control}
                        render={({field: {onChange, value, onBlur}}) => (
                            <View style={styles.formGroup}>
                                <SelectList 
                                    setSelected={(val: string) => (onChange(val))}
                                    data={data}
                                    save="value"
                                    boxStyles={styles.input}
                                    placeholder="Select Supplier"
                                />
                                { (errors as any)?.supplier?.message && <Text style={styles.textDanger}>{(errors as any)?.supplier?.message}</Text>}
                            </View>
                        )}
                        rules={{required: 'Supplier is required'}}
                    />
                    <Layout style={{flex:1, flexDirection: 'row', gap: 10}}>
                        <Controller 
                            name="retailPrice"
                            control={control}
                            render={({field: {onChange, value, onBlur}}) => (
                                <View style={styles.formGroup}>
                                    <TextInput 
                                        placeholder="Retail Price" 
                                        style={styles.input}
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={value => onChange(value)}
                                    />
                                    { (errors as any)?.retailPrice?.message && <Text style={styles.textDanger}>{(errors as any)?.retailPrice?.message}</Text>}
                                </View>
                            )}
                            rules={{required: 'Retail Price is required'}}
                        />
                        <Controller 
                            name="retailPrice"
                            control={control}
                            render={({field: {onChange, value, onBlur}}) => (
                                <View style={styles.formGroup}>
                                    <TextInput 
                                        placeholder="Retail Price" 
                                        style={styles.input}
                                        onBlur={onBlur}
                                        value={value}
                                        onChangeText={value => onChange(value)}
                                    />
                                    { (errors as any)?.retailPrice?.message && <Text style={styles.textDanger}>{(errors as any)?.retailPrice?.message}</Text>}
                                </View>
                            )}
                            rules={{required: 'Retail Price is required'}}
                        />
                    </Layout>
                    <Button title="Save Product" onPress={handleSubmit(submitHandler)} />
                </View>
            </View>
        </ScrollView>
    );
}

const localStyle = StyleSheet.create({
    itemImageContainer: {
        backgroundColor:'#f4f4f5', 
        borderWidth: 1, 
        borderStyle:'dashed',
        borderColor:'#ccc',  
        height: 250, 
        width:'100%', 
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default NewItem;