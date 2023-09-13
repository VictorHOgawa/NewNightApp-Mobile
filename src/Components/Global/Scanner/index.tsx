import {
  View,
  Modal,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import { useState, useEffect } from "react";
import { Button } from "../Button";
import Theme from "../../../styles/themes";
import { useNavigation } from "@react-navigation/native";
import { AuthPostAPI } from "../../../utils/api";

interface ScannerProps {
  openScanner: boolean;
  setOpenScanner: any;
  qrCodeInfo: any;
  setQrCodeInfo: any;
  handleScan: any;
  scanned: boolean;
  setScanned: any;
}

export function Scanner({
  openScanner,
  setOpenScanner,
  qrCodeInfo,
  setQrCodeInfo,
  handleScan,
  scanned,
  setScanned,
}: ScannerProps) {
  const [hasPermission, setHasPermission] = useState<any>(null);
  const handleBarCodeScanned = ({ type, data }: any) => {
    setScanned(true);
    if (data[0] !== "{") {
      setScanned(false);
      return Alert.alert("Código inválido");
    }

    const parsedCode = JSON.parse(data);
    if (!parsedCode.type || !parsedCode.id) {
      setScanned(false);
      return Alert.alert("Código inválido");
    }
    handleScan(data);
    setQrCodeInfo({ type: type, data: data });
  };

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    };
    getBarCodeScannerPermissions();
  }, []);

  return (
    <>
      <Modal
        visible={openScanner}
        onRequestClose={() => setOpenScanner(false)}
        style={{ backgroundColor: "red" }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: Theme.color.background,
          }}
        >
          {scanned ? (
            <ActivityIndicator
              size="large"
              color={Theme.color.primary_100}
              style={{ marginTop: "100%" }}
            />
          ) : (
            <BarCodeScanner
              onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
              style={StyleSheet.absoluteFillObject}
            />
          )}
          {scanned ? (
            <Button
              onPress={() => setScanned(false)}
              title="Ler novamente"
              height={30}
              style={{ position: "absolute", bottom: 10, right: 20 }}
            />
          ) : (
            <></>
          )}
          <Button
            onPress={() => setOpenScanner(false)}
            title="Voltar"
            height={30}
            style={{
              position: "absolute",
              bottom: 10,
              left: scanned ? 20 : null,
            }}
          />
        </View>
      </Modal>
    </>
  );
}
