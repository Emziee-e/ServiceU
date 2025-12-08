import { BarChart } from "react-native-chart-kit";
import { Dimensions, View, Text } from "react-native";

const screenWidth = Dimensions.get("window").width - 40;

export default function TotalBookingsCard() {
  return (
    <View
      style={{
        backgroundColor: "#E7F0F3",
        padding: 15,
        borderRadius: 12,
        marginTop: 10,
      }}
    >
      <Text style={{ fontSize: 16, fontWeight: "700", marginBottom: 5 }}>
        Total Bookings: <Text style={{ fontWeight: "400" }}>Last 7 Days</Text>
      </Text>

      <BarChart
        data={{
          labels: ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"],
          datasets: [
            {
              data: [3, 4, 2, 3, 3, 4, 5],
            },
          ],
        }}
        width={screenWidth}
        height={220}
        fromZero
        showBarTops={false}
        withInnerLines={true}
        chartConfig={{
          backgroundColor: "#E7F0F3",
          backgroundGradientFrom: "#E7F0F3",
          backgroundGradientTo: "#E7F0F3",
          decimalPlaces: 0,
          barPercentage: 0.5,
          fillShadowGradient: "#1E55FF",
          fillShadowGradientOpacity: 1,
          color: () => `rgba(0,0,0,0.5)`,
          labelColor: () => `#000`,
          propsForBackgroundLines: {
            stroke: "#C9D3D6",
            strokeDasharray: "0",
          },
        }}
        style={{
          marginTop: 10,
          borderRadius: 12,
        }}
      />
    </View>
  );
}