public class server{
        /**
     * @param args the command line arguments
     */
    public static void main ( String[] args) {
        executePost("http://localhost:3000/users", "");
    }
    
    public static String executePost(String targetURL, String urlParameters) {
  HttpURLConnection connection = null;

  try {
    //Create connection
    URL url = new URL(targetURL);
    connection = (HttpURLConnection) url.openConnection();
    connection.setRequestMethod("GET");
    connection.setRequestProperty("Content-Type", 
    "application/json");

    connection.setRequestProperty("Content-Length", 
        Integer.toString(urlParameters.getBytes().length));
    connection.setRequestProperty("Content-Language", "en-US");  

    connection.setUseCaches(false);
    connection.setDoOutput(true);

    //Send request
    DataOutputStream wr = new DataOutputStream (
        connection.getOutputStream());
    wr.writeBytes(urlParameters);
    wr.close();

    //Get Response  
    InputStream is = connection.getInputStream();
    BufferedReader rd = new BufferedReader(new InputStreamReader(is));
    StringBuilder response = new StringBuilder(); // or StringBuffer if Java version 5+
    String line;
    while ((line = rd.readLine()) != null) {
      response.append(line);
      response.append('\r');
    }
    rd.close();
    return response.toString();
  } catch (Exception e) {
    e.printStackTrace();
    return null;
  } finally {
    if (connection != null) {
      connection.disconnect();
    }
  }
}
    
    }