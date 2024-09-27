import { View, TextInput, ScrollView, Button, Text } from "react-native";
import styles from '../../styles/style';
import { useForm, Controller } from "react-hook-form";
import { Fragment } from "react";

const NewItem = () => {
    const { control, handleSubmit, formState: {errors} } = useForm();
    const submitHandler = (data: any) => {
        console.log(`data`, data);
    }
    
    return (
        <ScrollView>
            <View style={[styles.container]}>
                <View style={styles.card}>
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
                    <Controller 
                        name="category"
                        control={control}
                        render={({field: {onChange, value, onBlur}}) => (
                            <View style={styles.formGroup}>
                                <TextInput 
                                    placeholder="Category" 
                                    style={styles.input}
                                    onBlur={onBlur}
                                    value={value}
                                    onChangeText={value => onChange(value)}
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
                                <TextInput 
                                    placeholder="Supplier" 
                                    style={styles.input}
                                    onBlur={onBlur}
                                    value={value}
                                    onChangeText={value => onChange(value)}
                                />
                                { (errors as any)?.supplier?.message && <Text style={styles.textDanger}>{(errors as any)?.supplier?.message}</Text>}
                            </View>
                        )}
                        rules={{required: 'Supplier is required'}}
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
                    <Button title="Save Product" onPress={handleSubmit(submitHandler)} />
                </View>
            </View>
        </ScrollView>
    );
}

export default NewItem;