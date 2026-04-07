import {
  Keyboard,
  Modal,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  useColorScheme,
  View,
} from 'react-native';

interface ErrorDialogProps {
  title: string;
  error: string | null;
  setError: (error: string | null) => void;
}

export const ErrorDialog = ({ title, error, setError }: ErrorDialogProps) => {
  const theme = useColorScheme() ?? 'light';

  const styles = createStyles(theme);

  return (
    <Modal visible={!!error} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.overlay}>
        <View style={styles.dialog}>
          <Text>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
    </Modal>

    /*     <View className="flex-1 items-center justify-center gap-1">
      <Text className="font-lxmedium text-danger">{title}</Text>
      <Text className="font-lxregular text-danger">{error}</Text>
    </View> */
  );
};

const createStyles = (theme: 'light' | 'dark') =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
    },
    dialog: {
      backgroundColor: theme === 'light' ? '#fff' : '#333',
      borderRadius: 8,
      padding: 16,
    },
  });
