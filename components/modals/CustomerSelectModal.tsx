import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';
import Dropdown from '../dropdown/Dropdown';
import { primaryColor } from '@/app/styles/style';

type Props = {
    show: boolean,
    showHandler: () => void,
}

const data = new Array(30).fill({title: 'Alger'});

const CustomerSelectModal = (props: Props): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Modal
            visible={props.show}
            backdropStyle={styles.backdrop}
            onBackdropPress={props.showHandler}
            >
                <Card>
                    <Text style={styles.label}>Select Customer</Text>
                    <View style={{marginBottom:10}}>
                        <Dropdown
                            placeholder='Select Customer'
                            width={220} 
                            data={data}
                            />
                    </View>
                    <View>
                        <Button style={styles.button} onPress={() => alert(0)}>Apply</Button>
                    </View>
                </Card>
            </Modal>
        </View>
    );
};

export default CustomerSelectModal;

const styles = StyleSheet.create({
  container: {
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  label: {
    marginBottom:10,
    fontWeight: 700
  },
  button: {
    borderRadius: 10,
    backgroundColor: primaryColor,
  }
});