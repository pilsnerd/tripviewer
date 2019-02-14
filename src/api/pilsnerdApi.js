import axios from 'axios';
import tripsjpg from '../images/trips.jpg';
import photosjpg from '../images/photos.jpg';

export async function getFolders(path) {
  let axiosInstance = await axios.create({
    baseURL: 'http://www.pilsnerd.com/webservices/pilsnerdapi',
  });
  try {
    let response = await axiosInstance.get(`/photos/folders?path=${path}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getFullSizeFolders(imageName, imageExtension) {
  let axiosInstance = await axios.create({
    baseURL: 'http://www.pilsnerd.com/webservices/pilsnerdapi',
  });
  try {
    let response = await axiosInstance.get(`/photos/fullsize?filename=${imageName}&extension=${imageExtension}`)
    return response.data;
  } catch (error) {
    console.error(error);
  }
}







const trips = [{
  tripId: 1,
  name: 'BWCA 2018',
  startDate: '8/21/2018',
  endDate: '8/25/2018',
  mapCenter: { lat: 48.032711, lng: -90.795338 },
  mapZoomLevel: 12,
  pictures: [
    {
      pictureId: "IMG_1960.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1960.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "5:02 PM",
      latitude: 47.554822222222222222222222222,
      longitude: -90.87464166666666666666666667
    },
    {
      pictureId: "IMG_1961.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1961.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "5:07 PM",
      latitude: 47.556175,
      longitude: -90.87351944444444444444444445
    },
    {
      pictureId: "IMG_1962.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1962.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "5:08 PM",
      latitude: 47.556175,
      longitude: -90.87352777777777777777777778
    },
    {
      pictureId: "IMG_1963.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1963.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "5:12 PM",
      latitude: 47.556208333333333333333333333,
      longitude: -90.87348055555555555555555556
    },
    {
      pictureId: "IMG_1964.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1964.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "5:24 PM",
      latitude: 47.557652777777777777777777778,
      longitude: -90.87590000000000000000000000
    },
    {
      pictureId: "IMG_1965.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1965.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "6:20 PM",
      latitude: 47.749230555555555555555555555,
      longitude: -90.33474722222222222222222222
    },
    {
      pictureId: "IMG_1966.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1966.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/21/2018",
      timeTaken: "7:16 PM",
      latitude: 47.749127777777777777777777777,
      longitude: -90.33488333333333333333333333
    },
    {
      pictureId: "IMG_1967.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1967.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "8:36 AM",
      latitude: 48.073683333333333333333333334,
      longitude: -90.82929166666666666666666667
    },
    {
      pictureId: "IMG_1968.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1968.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "9:54 AM",
      latitude: 48.074263888888888888888888889,
      longitude: -90.81835833333333333333333334
    },
    {
      pictureId: "IMG_1969.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1969.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "10:42 AM",
      latitude: 48.071463888888888888888888889,
      longitude: -90.81470555555555555555555556
    },
    {
      pictureId: "IMG_1970.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1970.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:27 AM",
      latitude: 48.065516666666666666666666667,
      longitude: -90.79930000000000000000000000
    },
    {
      pictureId: "IMG_1971.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1971.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:27 AM",
      latitude: 48.065452777777777777777777778,
      longitude: -90.79929444444444444444444444
    },
    {
      pictureId: "IMG_1972.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1972.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:27 AM",
      latitude: 48.065452777777777777777777778,
      longitude: -90.79930833333333333333333333
    },
    {
      pictureId: "IMG_1973.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1973.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:27 AM",
      latitude: 48.065444444444444444444444444,
      longitude: -90.79932500000000000000000000
    },
    {
      pictureId: "IMG_1974.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1974.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:33 AM",
      latitude: 48.065502777777777777777777778,
      longitude: -90.79935555555555555555555555
    },
    {
      pictureId: "IMG_1975.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1975.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "11:33 AM",
      latitude: 48.065502777777777777777777778,
      longitude: -90.79936111111111111111111111
    },
    {
      pictureId: "IMG_1976.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1976.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "1:01 PM",
      latitude: 48.044527777777777777777777777,
      longitude: -90.78601944444444444444444444
    },
    {
      pictureId: "IMG_1977.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1977.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "1:53 PM",
      latitude: 48.032847222222222222222222223,
      longitude: -90.77818333333333333333333334
    },
    {
      pictureId: "IMG_1978.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1978.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "1:53 PM",
      latitude: 48.032847222222222222222222223,
      longitude: -90.77818333333333333333333334
    },
    {
      pictureId: "IMG_1979.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1979.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "3:25 PM",
      latitude: 48.013988888888888888888888889,
      longitude: -90.78918333333333333333333333
    },
    {
      pictureId: "IMG_1980.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1980.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "3:25 PM",
      latitude: 48.013988888888888888888888889,
      longitude: -90.78918333333333333333333333
    },
    {
      pictureId: "IMG_1981.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1981.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "3:25 PM",
      latitude: 48.014002777777777777777777778,
      longitude: -90.78916111111111111111111111
    },
    {
      pictureId: "IMG_1982.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1982.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "3:25 PM",
      latitude: 48.014002777777777777777777778,
      longitude: -90.78916111111111111111111111
    },
    {
      pictureId: "IMG_1983.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1983.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "4:06 PM",
      latitude: 48.0136,
      longitude: -90.78977222222222222222222222
    },
    {
      pictureId: "IMG_1984.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1984.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "4:13 PM",
      latitude: 48.013930555555555555555555556,
      longitude: -90.78955000000000000000000000
    },
    {
      pictureId: "IMG_1985.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1985.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "4:13 PM",
      latitude: 48.013916666666666666666666667,
      longitude: -90.78961944444444444444444444
    },
    {
      pictureId: "IMG_1986.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1986.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "4:13 PM",
      latitude: 48.013916666666666666666666667,
      longitude: -90.78961944444444444444444444
    },
    {
      pictureId: "IMG_1987.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1987.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "4:13 PM",
      latitude: 48.013947222222222222222222222,
      longitude: -90.78960555555555555555555555
    },
    {
      pictureId: "IMG_1988.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1988.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "5:17 PM",
      latitude: 48.013733333333333333333333333,
      longitude: -90.78910833333333333333333333
    },
    {
      pictureId: "IMG_1989.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1989.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/22/2018",
      timeTaken: "5:17 PM",
      latitude: 48.013733333333333333333333333,
      longitude: -90.78910833333333333333333333
    },
    {
      pictureId: "IMG_1990.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1990.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "11:26 AM",
      latitude: 48.01373,
      longitude: -90.78910
    },
    {
      pictureId: "IMG_1991.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1991.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "11:54 AM",
      latitude: 48.000738888888888888888888889,
      longitude: -90.79088611111111111111111111
    },
    {
      pictureId: "IMG_1992.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1992.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "11:56 AM",
      latitude: 48.000739,
      longitude: -90.79089
    },
    {
      pictureId: "IMG_1994.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1994.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "5:12 PM",
      latitude: 48.013919444444444444444444444,
      longitude: -90.78936111111111111111111111
    },
    {
      pictureId: "IMG_1995.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1995.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "5:12 PM",
      latitude: 48.013919444444444444444444444,
      longitude: -90.78936111111111111111111111
    },
    {
      pictureId: "IMG_1996.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1996.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "5:13 PM",
      latitude: 48.013897222222222222222222222,
      longitude: -90.78939166666666666666666666
    },
    {
      pictureId: "IMG_1997.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1997.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "6:13 PM",
      latitude: 48.014038888888888888888888889,
      longitude: -90.78900277777777777777777777
    },
    {
      pictureId: "IMG_1998.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1998.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "6:13 PM",
      latitude: 48.014038888888888888888888889,
      longitude: -90.78900277777777777777777777
    },
    {
      pictureId: "IMG_1999.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1999.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "8:09 PM",
      latitude: 48.013911111111111111111111111,
      longitude: -90.78941388888888888888888889
    },
    {
      pictureId: "IMG_2001.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2001.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/23/2018",
      timeTaken: "8:09 PM",
      latitude: 48.013813888888888888888888889,
      longitude: -90.78931388888888888888888889
    },
    {
      pictureId: "IMG_2002.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2002.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "9:09 AM",
      latitude: 48.013930555555555555555555556,
      longitude: -90.78955000000000000000000000
    },
    {
      pictureId: "IMG_2003.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2003.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "9:09 AM",
      latitude: 48.013930555555555555555555556,
      longitude: -90.78955000000000000000000000
    },
    {
      pictureId: "IMG_2004.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2004.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "9:09 AM",
      latitude: 48.013936111111111111111111111,
      longitude: -90.78958055555555555555555555
    },
    {
      pictureId: "IMG_2005.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2005.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "9:09 AM",
      latitude: 48.013936111111111111111111111,
      longitude: -90.78958055555555555555555555
    },
    {
      pictureId: "IMG_2006.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2006.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "10:07 AM",
      latitude: 48.013936,
      longitude: -90.789581
    },
    {
      pictureId: "IMG_2007.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2007.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "11:24 AM",
      latitude: 48.047305555555555555555555555,
      longitude: -90.78794166666666666666666666
    },
    {
      pictureId: "IMG_2008.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2008.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "1:51 PM",
      latitude: 48.067169444444444444444444445,
      longitude: -90.80478611111111111111111111
    },
    {
      pictureId: "IMG_2009.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2009.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "1:51 PM",
      latitude: 48.067169444444444444444444445,
      longitude: -90.80478611111111111111111111
    },
    {
      pictureId: "IMG_2010.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2010.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "1:52 PM",
      latitude: 48.067097222222222222222222223,
      longitude: -90.804825
    },
    {
      pictureId: "IMG_2011.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2011.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "1:52 PM",
      latitude: 48.067122222222222222222222223,
      longitude: -90.80491666666666666666666667
    },
    {
      pictureId: "IMG_2012.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2012.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:07 PM",
      latitude: 48.067019444444444444444444445,
      longitude: -90.80491666666666666666666667
    },
    {
      pictureId: "IMG_2013.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2013.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:08 PM",
      latitude: 48.067038888888888888888888889,
      longitude: -90.80493888888888888888888889
    },
    {
      pictureId: "IMG_2014.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2014.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:08 PM",
      latitude: 48.067038888888888888888888889,
      longitude: -90.80493888888888888888888889
    },
    {
      pictureId: "IMG_2015.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2015.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:08 PM",
      latitude: 48.067036111111111111111111111,
      longitude: -90.80493888888888888888888889
    },
    {
      pictureId: "IMG_2016.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2016.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:09 PM",
      latitude: 48.066997222222222222222222223,
      longitude: -90.804925
    },
    {
      pictureId: "IMG_2017.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2017.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:09 PM",
      latitude: 48.066997222222222222222222223,
      longitude: -90.804925
    },
    {
      pictureId: "IMG_2018.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2018.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:10 PM",
      latitude: 48.067213888888888888888888889,
      longitude: -90.80468055555555555555555556
    },
    {
      pictureId: "IMG_2019.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2019.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:10 PM",
      latitude: 48.067269444444444444444444445,
      longitude: -90.80465
    },
    {
      pictureId: "IMG_2020.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2020.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:10 PM",
      latitude: 48.067269444444444444444444445,
      longitude: -90.80464166666666666666666667
    },
    {
      pictureId: "IMG_2021.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2021.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:10 PM",
      latitude: 48.067272222222222222222222223,
      longitude: -90.80463333333333333333333333
    },
    {
      pictureId: "IMG_2022.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2022.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:11 PM",
      latitude: 48.067280555555555555555555556,
      longitude: -90.80464166666666666666666667
    },
    {
      pictureId: "IMG_2023.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2023.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:11 PM",
      latitude: 48.067280555555555555555555556,
      longitude: -90.80464166666666666666666667
    },
    {
      pictureId: "IMG_2024.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2024.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:11 PM",
      latitude: 48.067280555555555555555555556,
      longitude: -90.80464166666666666666666667
    },
    {
      pictureId: "IMG_2025.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2025.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:11 PM",
      latitude: 48.067280555555555555555555556,
      longitude: -90.80464166666666666666666667
    },
    {
      pictureId: "IMG_2026.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2026.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:30 PM",
      latitude: 48.06728,
      longitude: -90.80464
    },
    {
      pictureId: "IMG_2027.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2027.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:30 PM",
      latitude: 48.067141666666666666666666667,
      longitude: -90.80474166666666666666666667
    },
    {
      pictureId: "IMG_2028.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2028.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "4:30 PM",
      latitude: 48.067136111111111111111111111,
      longitude: -90.80473333333333333333333333
    },
    {
      pictureId: "IMG_2029.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2029.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "6:54 PM",
      latitude: 48.066880555555555555555555556,
      longitude: -90.80483333333333333333333333
    },
    {
      pictureId: "IMG_2030.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2030.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/24/2018",
      timeTaken: "6:56 PM",
      latitude: 48.06688,
      longitude: -90.80483
    },
    {
      pictureId: "IMG_2032.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2032.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/25/2018",
      timeTaken: "10:57 AM",
      latitude: 48.071113888888888888888888889,
      longitude: -90.81455277777777777777777778
    },
    {
      pictureId: "IMG_2035.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2035.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/25/2018",
      timeTaken: "11:50 AM",
      latitude: 48.076222222222222222222222223,
      longitude: -90.82153333333333333333333334
    },
    {
      pictureId: "IMG_2036.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2036.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/25/2018",
      timeTaken: "11:52 AM",
      latitude: 48.0762222,
      longitude: -90.821533
    },
    {
      pictureId: "IMG_2037.JPG",
      pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2037.JPG",
      pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
      dateTaken: "8/25/2018",
      timeTaken: "12:00 PM",
      latitude: 48.076222,
      longitude: -90.821533
    }
  ],
  places: [{
    placeId: 1,
    name: 'Long Island Lake campsite',
    description: 'This was a huge campsite',
    latitude: 48.013891,
    longitude: -90.789418,
    startDate: '8/22/2018',
    endDate: '8/24/2018',
    pictures: [{
      pictureId: 1,
      latitude: 48.013891,
      longitude: -90.789418,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 2,
      latitude: 48.013891,
      longitude: -90.789418,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 3,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 4,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 5,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 6,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }, {
      pictureId: 7,
      thumbnailUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979_s.JPG',
      pictureUrl: 'http://zeus/bwca/2018/Pictures/05%20Camp%20site%20on%20Long%20Island%20Lake/IMG_1979.JPG'
    }]
  },
  {
    placeId: 2,
    name: 'Ham Lake campsite',
    description: 'We stayed here on Friday night',
    latitude: 48.067125,
    longitude: -90.804790,
    startDate: '8/24/2018',
    endDate: '8/25/2018',
    pictures: [{
      pictureId: 3,
      thumbnailUrl: 'http://www.pilsnerd.com/EasyPics/2018/20180218/IMG_1358_s.JPG',
      pictureUrl: 'http://www.pilsnerd.com//EasyPics/2018/20180218/IMG_1358.JPG'
    }]
  },
  {
    placeId: 3,
    name: 'Day trip to Frost Lake',
    latitude: 47.992221,
    longitude: -90.810312,
    startDate: '8/23/2018',
    pictures: []
  }]
},
{
  tripId: 2,
  name: 'Baker Park 2018',
  startDate: '8/3/2018',
  endDate: '8/5/2018',
  mapCenter: { lat: 45.018732, lng: -93.639932 },
  mapZoomLevel: 16,
  places: [{
    placeId: 1,
    name: 'campsite',
    latitude: 45.018225,
    longitude: -93.638137,
    pictures: []
  }],
  pictures: []
}];


export async function getTrips() {
  return trips;
}

export async function getTrip(tripId) {
  for (var i = 0; i < trips.length; i++) {
    console.log('current trip', trips[i].tripId);
    console.log('looking for', tripId);
    if (trips[i].tripId == tripId) {
      // console.log('building picturePlaces');
      // const picturePlaces = extractPlacesFromPictures(trips[i].pictures, trips[i].mapZoomLevel);
      // trips[i].picturePlaces = picturePlaces;
      console.log('returning trip', trips[i]);
      return trips[i];
    }
  }
  console.log('returning null trip');
  return {};
}










const tripsByDate = [
  {
    tripId: 20180821,
    name: 'BWCA 2018',
    description: `This was my fourth trip to the Boundary Waters Canoe Area Wilderness. Hayden didn't want to join us so it was just JP, Marlo, and me.`,
    startDate: '8/21/2018',
    endDate: '8/25/2018',
    mapCenter: { lat: 47.870611, lng: -90.640608 },
    mapZoomLevel: 10,
    dates: [
      {
        date: '8/21/2018',
        description: `I was at work in the morning on this day; I left around 11am. JP picked us up at our hosue, we loaded everything into his car, and off we went. We stopped at Temperance River for a hike, then in Grand Marais for some Sven and Ole's pizza. After dinner we headed up the Gunflint Trail to Tuscarora Lodge where we spent the night in a bunkhouse.`,
        mapCenter: { lat: 47.667502, lng: -90.629107 },
        mapZoomLevel: 10,
        pictures: [
          {
            pictureId: "IMG_1960.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1960.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "5:02 PM",
            latitude: 47.554822222222222222222222222,
            longitude: -90.87464166666666666666666667
          },
          {
            pictureId: "IMG_1961.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1961.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "5:07 PM",
            latitude: 47.556175,
            longitude: -90.87351944444444444444444445
          },
          {
            pictureId: "IMG_1962.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1962.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "5:08 PM",
            latitude: 47.556175,
            longitude: -90.87352777777777777777777778
          },
          {
            pictureId: "IMG_1963.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1963.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "5:12 PM",
            latitude: 47.556208333333333333333333333,
            longitude: -90.87348055555555555555555556
          },
          {
            pictureId: "IMG_1964.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1964.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "5:24 PM",
            latitude: 47.557652777777777777777777778,
            longitude: -90.87590000000000000000000000
          },
          {
            pictureId: "IMG_1965.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1965.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "6:20 PM",
            latitude: 47.749230555555555555555555555,
            longitude: -90.33474722222222222222222222
          },
          {
            pictureId: "IMG_1966.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1966.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/21/2018",
            timeTaken: "7:16 PM",
            latitude: 47.749127777777777777777777777,
            longitude: -90.33488333333333333333333333
          }
        ]
      },
      {
        date: '8/22/2018',
        description: 'We woke up early and had French Toast in the Lodge at 7am. After breakfast we packed up what we needed, and drove to Entry Point 50. We loaded the canoe and paddled away from civilization. After 7 portages we found a great camp site on Long Island Lake.',
        mapCenter: { lat: 48.032711, lng: -90.795338 },
        mapZoomLevel: 12,
        pictures: [
          {
            pictureId: "IMG_1967.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1967.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "8:36 AM",
            latitude: 48.073683333333333333333333334,
            longitude: -90.82929166666666666666666667
          },
          {
            pictureId: "IMG_1968.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1968.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "9:54 AM",
            latitude: 48.074263888888888888888888889,
            longitude: -90.81835833333333333333333334
          },
          {
            pictureId: "IMG_1969.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1969.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "10:42 AM",
            latitude: 48.071463888888888888888888889,
            longitude: -90.81470555555555555555555556
          },
          {
            pictureId: "IMG_1970.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1970.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:27 AM",
            latitude: 48.065516666666666666666666667,
            longitude: -90.79930000000000000000000000
          },
          {
            pictureId: "IMG_1971.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1971.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:27 AM",
            latitude: 48.065452777777777777777777778,
            longitude: -90.79929444444444444444444444
          },
          {
            pictureId: "IMG_1972.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1972.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:27 AM",
            latitude: 48.065452777777777777777777778,
            longitude: -90.79930833333333333333333333
          },
          {
            pictureId: "IMG_1973.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1973.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:27 AM",
            latitude: 48.065444444444444444444444444,
            longitude: -90.79932500000000000000000000
          },
          {
            pictureId: "IMG_1974.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1974.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:33 AM",
            latitude: 48.065502777777777777777777778,
            longitude: -90.79935555555555555555555555
          },
          {
            pictureId: "IMG_1975.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1975.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "11:33 AM",
            latitude: 48.065502777777777777777777778,
            longitude: -90.79936111111111111111111111
          },
          {
            pictureId: "IMG_1976.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1976.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "1:01 PM",
            latitude: 48.044527777777777777777777777,
            longitude: -90.78601944444444444444444444
          },
          {
            pictureId: "IMG_1977.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1977.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "1:53 PM",
            latitude: 48.032847222222222222222222223,
            longitude: -90.77818333333333333333333334
          },
          {
            pictureId: "IMG_1978.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1978.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "1:53 PM",
            latitude: 48.032847222222222222222222223,
            longitude: -90.77818333333333333333333334
          },
          {
            pictureId: "IMG_1979.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1979.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "3:25 PM",
            latitude: 48.013988888888888888888888889,
            longitude: -90.78918333333333333333333333
          },
          {
            pictureId: "IMG_1980.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1980.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "3:25 PM",
            latitude: 48.013988888888888888888888889,
            longitude: -90.78918333333333333333333333
          },
          {
            pictureId: "IMG_1981.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1981.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "3:25 PM",
            latitude: 48.014002777777777777777777778,
            longitude: -90.78916111111111111111111111
          },
          {
            pictureId: "IMG_1982.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1982.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "3:25 PM",
            latitude: 48.014002777777777777777777778,
            longitude: -90.78916111111111111111111111
          },
          {
            pictureId: "IMG_1983.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1983.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "4:06 PM",
            latitude: 48.0136,
            longitude: -90.78977222222222222222222222
          },
          {
            pictureId: "IMG_1984.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1984.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "4:13 PM",
            latitude: 48.013930555555555555555555556,
            longitude: -90.78955000000000000000000000
          },
          {
            pictureId: "IMG_1985.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1985.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "4:13 PM",
            latitude: 48.013916666666666666666666667,
            longitude: -90.78961944444444444444444444
          },
          {
            pictureId: "IMG_1986.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1986.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "4:13 PM",
            latitude: 48.013916666666666666666666667,
            longitude: -90.78961944444444444444444444
          },
          {
            pictureId: "IMG_1987.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1987.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "4:13 PM",
            latitude: 48.013947222222222222222222222,
            longitude: -90.78960555555555555555555555
          },
          {
            pictureId: "IMG_1988.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1988.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "5:17 PM",
            latitude: 48.013733333333333333333333333,
            longitude: -90.78910833333333333333333333
          },
          {
            pictureId: "IMG_1989.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1989.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/22/2018",
            timeTaken: "5:17 PM",
            latitude: 48.013733333333333333333333333,
            longitude: -90.78910833333333333333333333
          }
        ]
      },
      {
        date: '8/23/2018',
        description: `We took a day trip to Frost Lake. There's a long portage along the way and Frost Lake had a stiff wind in our faces as soon as we emerged from the trees. It was tought paddling, so we abandoned the idea of finding the sandy beach on that lake. We threw the fishing lines in for a while but we were getting blown around so much, that didn't last too long. So we headed back to camp.`,
        mapCenter: { lat: 48.032711, lng: -90.795338 },
        mapZoomLevel: 12,
        pictures: [
          {
            pictureId: "IMG_1990.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1990.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "11:26 AM",
            latitude: 48.01373,
            longitude: -90.78910
          },
          {
            pictureId: "IMG_1991.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1991.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "11:54 AM",
            latitude: 48.000738888888888888888888889,
            longitude: -90.79088611111111111111111111
          },
          {
            pictureId: "IMG_1992.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1992.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "11:56 AM",
            latitude: 48.000739,
            longitude: -90.79089
          },
          {
            pictureId: "IMG_1994.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1994.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "5:12 PM",
            latitude: 48.013919444444444444444444444,
            longitude: -90.78936111111111111111111111
          },
          {
            pictureId: "IMG_1995.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1995.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "5:12 PM",
            latitude: 48.013919444444444444444444444,
            longitude: -90.78936111111111111111111111
          },
          {
            pictureId: "IMG_1996.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1996.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "5:13 PM",
            latitude: 48.013897222222222222222222222,
            longitude: -90.78939166666666666666666666
          },
          {
            pictureId: "IMG_1997.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1997.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "6:13 PM",
            latitude: 48.014038888888888888888888889,
            longitude: -90.78900277777777777777777777
          },
          {
            pictureId: "IMG_1998.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1998.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "6:13 PM",
            latitude: 48.014038888888888888888888889,
            longitude: -90.78900277777777777777777777
          },
          {
            pictureId: "IMG_1999.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_1999.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "8:09 PM",
            latitude: 48.013911111111111111111111111,
            longitude: -90.78941388888888888888888889
          },
          {
            pictureId: "IMG_2001.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2001.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/23/2018",
            timeTaken: "8:09 PM",
            latitude: 48.013813888888888888888888889,
            longitude: -90.78931388888888888888888889
          }
        ]
      },
      {
        date: '8/24/2018',
        description: `We had to move our camp site closer to the Entry Point or else we knew we wouldn't get home until after midnight on Saturday. So we ate some pancakes and packed up. We had decided to move to Ham Lake, which would leave just two more portages the next day. Marlo carried the food barrel on a few of the portages on this day. The Ham Lake camp site we picked was on a huge rocky peninsula so we had a great view of the lake on multiple sides of the site.`,
        mapCenter: { lat: 48.032711, lng: -90.795338 },
        mapZoomLevel: 12,
        pictures: [
          {
            pictureId: "IMG_2002.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2002.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "9:09 AM",
            latitude: 48.013930555555555555555555556,
            longitude: -90.78955000000000000000000000
          },
          {
            pictureId: "IMG_2003.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2003.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "9:09 AM",
            latitude: 48.013930555555555555555555556,
            longitude: -90.78955000000000000000000000
          },
          {
            pictureId: "IMG_2004.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2004.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "9:09 AM",
            latitude: 48.013936111111111111111111111,
            longitude: -90.78958055555555555555555555
          },
          {
            pictureId: "IMG_2005.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2005.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "9:09 AM",
            latitude: 48.013936111111111111111111111,
            longitude: -90.78958055555555555555555555
          },
          {
            pictureId: "IMG_2006.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2006.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "10:07 AM",
            latitude: 48.020796,
            longitude: -90.777611
          },
          {
            pictureId: "IMG_2007.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2007.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "11:24 AM",
            latitude: 48.047305555555555555555555555,
            longitude: -90.78794166666666666666666666
          },
          {
            pictureId: "IMG_2008.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2008.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "1:51 PM",
            latitude: 48.067169444444444444444444445,
            longitude: -90.80478611111111111111111111
          },
          {
            pictureId: "IMG_2009.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2009.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "1:51 PM",
            latitude: 48.067169444444444444444444445,
            longitude: -90.80478611111111111111111111
          },
          {
            pictureId: "IMG_2010.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2010.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "1:52 PM",
            latitude: 48.067097222222222222222222223,
            longitude: -90.804825
          },
          {
            pictureId: "IMG_2011.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2011.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "1:52 PM",
            latitude: 48.067122222222222222222222223,
            longitude: -90.80491666666666666666666667
          },
          {
            pictureId: "IMG_2012.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2012.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:07 PM",
            latitude: 48.067019444444444444444444445,
            longitude: -90.80491666666666666666666667
          },
          {
            pictureId: "IMG_2013.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2013.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:08 PM",
            latitude: 48.067038888888888888888888889,
            longitude: -90.80493888888888888888888889
          },
          {
            pictureId: "IMG_2014.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2014.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:08 PM",
            latitude: 48.067038888888888888888888889,
            longitude: -90.80493888888888888888888889
          },
          {
            pictureId: "IMG_2015.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2015.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:08 PM",
            latitude: 48.067036111111111111111111111,
            longitude: -90.80493888888888888888888889
          },
          {
            pictureId: "IMG_2016.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2016.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:09 PM",
            latitude: 48.066997222222222222222222223,
            longitude: -90.804925
          },
          {
            pictureId: "IMG_2017.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2017.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:09 PM",
            latitude: 48.066997222222222222222222223,
            longitude: -90.804925
          },
          {
            pictureId: "IMG_2018.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2018.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:10 PM",
            latitude: 48.067213888888888888888888889,
            longitude: -90.80468055555555555555555556
          },
          {
            pictureId: "IMG_2019.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2019.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:10 PM",
            latitude: 48.067269444444444444444444445,
            longitude: -90.80465
          },
          {
            pictureId: "IMG_2020.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2020.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:10 PM",
            latitude: 48.067269444444444444444444445,
            longitude: -90.80464166666666666666666667
          },
          {
            pictureId: "IMG_2021.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2021.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:10 PM",
            latitude: 48.067272222222222222222222223,
            longitude: -90.80463333333333333333333333
          },
          {
            pictureId: "IMG_2022.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2022.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:11 PM",
            latitude: 48.067280555555555555555555556,
            longitude: -90.80464166666666666666666667
          },
          {
            pictureId: "IMG_2023.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2023.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:11 PM",
            latitude: 48.067280555555555555555555556,
            longitude: -90.80464166666666666666666667
          },
          {
            pictureId: "IMG_2024.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2024.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:11 PM",
            latitude: 48.067280555555555555555555556,
            longitude: -90.80464166666666666666666667
          },
          {
            pictureId: "IMG_2025.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2025.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:11 PM",
            latitude: 48.067280555555555555555555556,
            longitude: -90.80464166666666666666666667
          },
          {
            pictureId: "IMG_2026.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2026.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:30 PM",
            latitude: 48.06728,
            longitude: -90.80464
          },
          {
            pictureId: "IMG_2027.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2027.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:30 PM",
            latitude: 48.067141666666666666666666667,
            longitude: -90.80474166666666666666666667
          },
          {
            pictureId: "IMG_2028.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2028.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "4:30 PM",
            latitude: 48.067136111111111111111111111,
            longitude: -90.80473333333333333333333333
          },
          {
            pictureId: "IMG_2029.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2029.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "6:54 PM",
            latitude: 48.066880555555555555555555556,
            longitude: -90.80483333333333333333333333
          },
          {
            pictureId: "IMG_2030.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2030.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/24/2018",
            timeTaken: "6:56 PM",
            latitude: 48.06688,
            longitude: -90.80483
          }
        ]
      },
      {
        date: '8/25/2018',
        description: `The home stretch. Two easy portages to the Entry (Exit?) Point. Then a 1 minute drive back to Tuscarora Lodge where we showered before the 6 hour car ride home.`,
        mapCenter: { lat: 48.032711, lng: -90.795338 },
        mapZoomLevel: 12,
        pictures: [
          {
            pictureId: "IMG_2032.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2032.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/25/2018",
            timeTaken: "10:57 AM",
            latitude: 48.071113888888888888888888889,
            longitude: -90.81455277777777777777777778
          },
          {
            pictureId: "IMG_2035.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2035.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/25/2018",
            timeTaken: "11:50 AM",
            latitude: 48.076222222222222222222222223,
            longitude: -90.82153333333333333333333334
          },
          {
            pictureId: "IMG_2036.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2036.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/25/2018",
            timeTaken: "11:52 AM",
            latitude: 48.0762222,
            longitude: -90.821533
          },
          {
            pictureId: "IMG_2037.JPG",
            pictureUrl: "http://www.pilsnerd.com/bwca/2018/images/IMG_2037.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/bwca/2018/images/",
            dateTaken: "8/25/2018",
            timeTaken: "12:00 PM",
            latitude: 48.076222,
            longitude: -90.821533
          }
        ]
      }
    ]
  },
  {
    tripId: 20180803,
    name: 'Baker Park 2018',
    startDate: '8/3/2018',
    endDate: '8/6/2018',
    mapCenter: { lat: 45.018732, lng: -93.639932 },
    mapZoomLevel: 16,
    dates: [
      {
        date: '8/3/2018',
        description: `We picked up Marlo from a Glass Art camp and went straight to Baker Park Reserve. It poured that night so we spent some time in the tent.`,
        mapCenter: { lat: 45.018732, lng: -93.639932 },
        mapZoomLevel: 16,
        pictures: [
          {
            pictureId: "IMG_1924.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1924.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/3/2018",
            timeTaken: "8:41 PM",
            latitude: 45.018380555555555555555555556,
            longitude: -93.63838888888888888888888889
          }
        ]
      },
      {
        date: '8/4/2018',
        description: `This was the first year we decided to try three nights of camping instead of just two. Tim brought his smoker and smoked lots of meats. The boys have lots of fun playing with LEGOs.`,
        mapCenter: { lat: 45.018732, lng: -93.639932 },
        mapZoomLevel: 16,
        pictures: [
          {
            pictureId: "IMG_1925.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1925.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "12:39 PM",
            latitude: 45.018319444444444444444444445,
            longitude: -93.63798611111111111111111111
          },
          {
            pictureId: "IMG_1926.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1926.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "12:40 PM",
            latitude: 45.018375000000000000000000000,
            longitude: -93.63794722222222222222222222
          },
          {
            pictureId: "IMG_1927.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1927.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "12:40 PM",
            latitude: 45.018397222222222222222222223,
            longitude: -93.63803888888888888888888889
          },
          {
            pictureId: "IMG_1928.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1928.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "3:06 PM",
            latitude: 45.018222222222222222222222223,
            longitude: -93.63820555555555555555555555
          },
          {
            pictureId: "IMG_1929.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1929.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "3:06 PM",
            latitude: 45.018227777777777777777777778,
            longitude: -93.63819166666666666666666666
          },
          {
            pictureId: "IMG_1930.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1930.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "3:06 PM",
            latitude: 45.018219444444444444444444445,
            longitude: -93.63819166666666666666666666
          },
          {
            pictureId: "IMG_1931.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1931.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "3:06 PM",
            latitude: 45.018219444444444444444444445,
            longitude: -93.63819166666666666666666666
          },
          {
            pictureId: "IMG_1932.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1932.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "3:07 PM",
            latitude: 45.018227777777777777777777778,
            longitude: -93.63816111111111111111111111
          },
          {
            pictureId: "IMG_1933.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1933.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "5:08 PM",
            latitude: 45.018261111111111111111111111,
            longitude: -93.63789444444444444444444444
          },
          {
            pictureId: "IMG_1934.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1934.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "6:26 PM",
            latitude: 45.018513888888888888888888889,
            longitude: -93.63823611111111111111111111
          },
          {
            pictureId: "IMG_1935.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1935.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "6:46 PM",
            latitude: 45.018322222222222222222222223,
            longitude: -93.63813888888888888888888889
          },
          {
            pictureId: "IMG_1936.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1936.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "6:47 PM",
            latitude: 45.018294444444444444444444445,
            longitude: -93.63796944444444444444444444
          },
          {
            pictureId: "IMG_1937.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1937.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "8:07 PM",
            latitude: 45.018066666666666666666666667,
            longitude: -93.64136388888888888888888889
          },
          {
            pictureId: "IMG_1938.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1938.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "8:09 PM",
            latitude: 45.023394444444444444444444445,
            longitude: -93.62673888888888888888888889
          },
          {
            pictureId: "IMG_1939.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1939.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/4/2018",
            timeTaken: "8:09 PM",
            latitude: 45.017861111111111111111111111,
            longitude: -93.64051111111111111111111111
          }
        ]
      },
      {
        date: '8/5/2018',
        description: `We walked to the beach on Sunday.`,
        mapCenter: { lat: 45.018732, lng: -93.639932 },
        mapZoomLevel: 16,
        pictures: [
          {
            pictureId: "IMG_1940.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1940.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/5/2018",
            timeTaken: "10:25 AM",
            latitude: 45.006383333333333333333333333,
            longitude: -93.62130833333333333333333334
          },
          {
            pictureId: "IMG_1941.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1941.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/5/2018",
            timeTaken: "10:25 AM",
            latitude: 45.006383333333333333333333333,
            longitude: -93.62130833333333333333333334
          },
          {
            pictureId: "IMG_1942.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1942.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/5/2018",
            timeTaken: "11:36 AM",
            latitude: 45.018250000000000000000000000,
            longitude: -93.63819166666666666666666666
          },
          {
            pictureId: "IMG_1943.JPG",
            pictureUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/IMG_1943.JPG",
            pictureFolderUrl: "http://www.pilsnerd.com/EasyPics/2018/20180909/201808-August/",
            dateTaken: "8/5/2018",
            timeTaken: "1:41 PM",
            latitude: 45.020243,
            longitude: -93.641338
          }
        ]
      }
    ]
  },
  {
    tripId: 20170804,
    name: 'BWCA 2017',
    startDate: '8/4/2017',
    endDate: '8/6/2017',
    mapCenter: { lat: 47.803091, lng: -91.156813 },
    mapZoomLevel: 12,
    dates: [
      {
        date: '8/4/2017',
        description: `Day 1`,
        mapCenter: { lat: 47.803091, lng: -91.121813 },
        mapZoomLevel: 13,
        pictures: [
          {
            "pictureId": "IMG_0971.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0971.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "12:56 PM",
            "latitude": 47.810980555555555555555555556,
            "longitude": -91.08731111111111111111111111
          },
          {
            "pictureId": "IMG_0972.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0972.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:10 PM",
            "latitude": 47.810433333333333333333333333,
            "longitude": -91.08931666666666666666666666
          },
          {
            "pictureId": "IMG_0973.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0973.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:10 PM",
            "latitude": 47.810427777777777777777777778,
            "longitude": -91.08933333333333333333333333
          },
          {
            "pictureId": "IMG_0974.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0974.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:10 PM",
            "latitude": 47.810427777777777777777777778,
            "longitude": -91.08933333333333333333333333
          },
          {
            "pictureId": "IMG_0975.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0975.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:10 PM",
            "latitude": 47.810422222222222222222222222,
            "longitude": -91.08936944444444444444444444
          },
          {
            "pictureId": "IMG_0976.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0976.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:31 PM",
            "latitude": 47.813186111111111111111111111,
            "longitude": -91.09338333333333333333333333
          },
          {
            "pictureId": "IMG_0977.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0977.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "1:31 PM",
            "latitude": 47.813186111111111111111111111,
            "longitude": -91.09338333333333333333333333
          },
          {
            "pictureId": "IMG_0978.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0978.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "5:46 PM",
            "latitude": 47.803544444444444444444444444,
            "longitude": -91.15674722222222222222222222
          },
          {
            "pictureId": "IMG_0979.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0979.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "5:46 PM",
            "latitude": 47.803311111111111111111111111,
            "longitude": -91.15700555555555555555555556
          },
          {
            "pictureId": "IMG_0980.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0980.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "5:46 PM",
            "latitude": 47.803311111111111111111111111,
            "longitude": -91.15700555555555555555555556
          },
          {
            "pictureId": "IMG_0981.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0981.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "5:46 PM",
            "latitude": 47.803544444444444444444444444,
            "longitude": -91.15713611111111111111111111
          },
          {
            "pictureId": "IMG_0982.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0982.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/4/2017",
            "timeTaken": "6:51 PM",
            "latitude": 47.80325,
            "longitude": -91.15677777777777777777777778
          }
        ]
      }, {
        date: '8/5/2017',
        description: `Day 2`,
        mapCenter: { lat: 47.803091, lng: -91.141813 },
        mapZoomLevel: 13,
        pictures: [
          {
            "pictureId": "IMG_0983.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0983.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "6:35 AM",
            "latitude": 47.803519444444444444444444444,
            "longitude": -91.15713611111111111111111111
          },
          {
            "pictureId": "IMG_0985.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0985.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:28 AM",
            "latitude": 47.80332222222222222222222222,
            "longitude": -91.15698888888888888888888889
          },
          {
            "pictureId": "IMG_0986.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0986.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:43 AM",
            "latitude": 47.803366666666666666666666667,
            "longitude": -91.15686111111111111111111111
          },
          {
            "pictureId": "IMG_0987.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0987.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:57 AM",
            "latitude": 47.803366666666666666666666667,
            "longitude": -91.15691388888888888888888889
          },
          {
            "pictureId": "IMG_0988.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0988.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:57 AM",
            "latitude": 47.803322222222222222222222222,
            "longitude": -91.15691388888888888888888889
          },
          {
            "pictureId": "IMG_0989.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0989.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:57 AM",
            "latitude": 47.803322222222222222222222222,
            "longitude": -91.15691388888888888888888889
          },
          {
            "pictureId": "IMG_0990.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0990.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "8:58 AM",
            "latitude": 47.803313888888888888888888889,
            "longitude": -91.15691388888888888888888889
          },
          {
            "pictureId": "IMG_0991.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0991.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "11:41 AM",
            "latitude": 47.803097222222222222222222222,
            "longitude": -91.156525
          },
          {
            "pictureId": "IMG_0992.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0992.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "11:41 AM",
            "latitude": 47.803097222222222222222222222,
            "longitude": -91.156525
          },
          {
            "pictureId": "IMG_0993.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0993.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "11:41 AM",
            "latitude": 47.803352777777777777777777778,
            "longitude": -91.15724166666666666666666667
          },
          {
            "pictureId": "IMG_0994.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0994.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:24 PM",
            "latitude": 47.803202777777777777777777778,
            "longitude": -91.15701944444444444444444444
          },
          {
            "pictureId": "IMG_0995.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0995.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:24 PM",
            "latitude": 47.803222222222222222222222222,
            "longitude": -91.15701944444444444444444444
          },
          {
            "pictureId": "IMG_0996.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0996.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:24 PM",
            "latitude": 47.803219444444444444444444444,
            "longitude": -91.15701388888888888888888889
          },
          {
            "pictureId": "IMG_0997.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0997.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:24 PM",
            "latitude": 47.803202777777777777777777778,
            "longitude": -91.156975
          },
          {
            "pictureId": "IMG_0998.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0998.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:25 PM",
            "latitude": 47.803233333333333333333333333,
            "longitude": -91.15693611111111111111111111
          },
          {
            "pictureId": "IMG_0999.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_0999.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:26 PM",
            "latitude": 47.803275,
            "longitude": -91.15692777777777777777777778
          },
          {
            "pictureId": "IMG_1001.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1001.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:26 PM",
            "latitude": 47.803280555555555555555555556,
            "longitude": -91.15693611111111111111111111
          },
          {
            "pictureId": "IMG_1002.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1002.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:26 PM",
            "latitude": 47.803313888888888888888888889,
            "longitude": -91.15695833333333333333333333
          },
          {
            "pictureId": "IMG_1003.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1003.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:27 PM",
            "latitude": 47.803341666666666666666666667,
            "longitude": -91.15698888888888888888888889
          },
          {
            "pictureId": "IMG_1005.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1005.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:28 PM",
            "latitude": 47.803347222222222222222222222,
            "longitude": -91.15695833333333333333333333
          },
          {
            "pictureId": "IMG_1006.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1006.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:28 PM",
            "latitude": 47.803341666666666666666666667,
            "longitude": -91.15696666666666666666666667
          },
          {
            "pictureId": "IMG_1007.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1007.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:29 PM",
            "latitude": 47.803202777777777777777777778,
            "longitude": -91.15692777777777777777777778
          },
          {
            "pictureId": "IMG_1008.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1008.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/5/2017",
            "timeTaken": "2:29 PM",
            "latitude": 47.803091666666666666666666667,
            "longitude": -91.15681388888888888888888889
          }
        ]
      }, {
        date: '8/6/2017',
        description: `Day 3`,
        mapCenter: { lat: 47.803091, lng: -91.121813 },
        mapZoomLevel: 13,
        pictures: [
          {
            "pictureId": "IMG_1010.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1010.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/6/2017",
            "timeTaken": "6:46 AM",
            "latitude": 47.803455555555555555555555556,
            "longitude": -91.15714166666666666666666667
          },
          {
            "pictureId": "IMG_1012.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1012.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/6/2017",
            "timeTaken": "12:29 PM",
            "latitude": 47.810718,
            "longitude": -91.089260
          },
          {
            "pictureId": "IMG_1013.JPG",
            "pictureUrl": "http://www.pilsnerd.com/bwca/2017/IMG_1013.JPG",
            "pictureFolderUrl": "http://www.pilsnerd.com/bwca/2017/",
            "dateTaken": "8/6/2017",
            "timeTaken": "12:29 PM",
            "latitude": 47.810718,
            "longitude": -91.089260
          }
        ]
      }
    ]
  }
];

export async function getMenus() {
  const menuItems = [
    { link: '/', text: 'Home', description: 'This is where you are now'},
    { link: '/photo', text: 'Photos', description: 'Pictures, organized by upload date', iconUrl: photosjpg, lastUpdated: '2/12/2019' },
    // { link: '/trips', text: 'Trips', description: 'More pictures, organized by trip', iconUrl: tripsjpg, lastUpdated: '8/31/2018' },
    // { link: '/maptest', text: 'Map Test' }
  ];
  return menuItems;
}

export async function getTripsByDate() {
  return tripsByDate;
}

export async function getTripByDate(tripId) {
  for (var i = 0; i < tripsByDate.length; i++) {
    console.log('current trip', tripsByDate[i].tripId);
    console.log('looking for', tripId);
    if (tripsByDate[i].tripId == tripId) {
      // console.log('building picturePlaces');
      // const picturePlaces = extractPlacesFromPictures(trips[i].pictures, trips[i].mapZoomLevel);
      // trips[i].picturePlaces = picturePlaces;
      console.log('returning trip', tripsByDate[i]);
      return tripsByDate[i];
    }
  }
  console.log('returning null trip');
  return {};
}


// SAMPLES FROM WORK //

// export const getCustomerIslas = (customerCode) => {
//   const baseUrl = config.getConfig().islaUiServiceEndpoint;
//   const token = getToken();
//   const userName = getUserName();

//   let payload = {
//     headers: {
//       'X-UserId': userName,
//       'X-SourceSystem': 'Mdm.Isla.UI',
//       Authorization: `Bearer ${token.accessToken}`
//     }
//   };

//   return axios
//     .get(`${baseUrl}/Islas/${customerCode}`, payload)
//     .then(response => {
//       const { customerName, islas } = response.data;

//       return { customerName, islas };
//     });
// };

// export const putCustomerIsla = (isla) => {
//   const baseUrl = config.getConfig().islaUiServiceEndpoint;
//   const token = getToken();
//   const userName = getUserName();

//   let payload = {
//     headers: {
//       'X-UserId': userName,
//       'X-SourceSystem': 'Mdm.Isla.UI',
//       Authorization: `Bearer ${token.accessToken}`
//     }
//   };

//   return axios
//     .put(`${baseUrl}/Islas/${isla.customerCode}/${isla.owningBranchCode}/${isla.controllingBranchCode}`, { isla }, payload)
//     .then(response => {
//       const responseStatus = response.status;
//       return responseStatus;
//     })
//     .catch(error => {
//       return error;
//     });
// };
