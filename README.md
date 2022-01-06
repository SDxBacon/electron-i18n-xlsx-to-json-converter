<div id="top"></div>

## i18n Excel to JSON converter

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<p align="center">
  <img width="728" alt="截圖 2022-01-06 下午5 37 53" src="https://user-images.githubusercontent.com/10906745/148363161-39a3feb2-ec0e-4956-86ab-68f730a4796f.png">
</p>

隨著支援i18n已經是現代專案必備的需求, 這個工具主要是我做來方便工作用的小工具程式。選擇並導入多語系的excel檔案可以將其轉換成方便使用的JSON文件, 以便後續開發的調用。

As support for i18n has become a necessary requirement for modern projects, this tool is mainly a small tool program that I made to facilitate my work. Select and import a multilingual excel file to convert it into a convenient JSON file for subsequent development calls.


<p align="right">(<a href="#top">back to top</a>)</p>


<!-- ABOUT THE PROJECT -> Built With -->
### Built With

* [Electron](https://www.electronjs.org/)
* [Electron React Boilerplate](https://github.com/electron-react-boilerplate/electron-react-boilerplate)
* [React.js](https://reactjs.org/)

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- USAGE EXAMPLES -->
## Usage

For example, if you got an i18n excel with two sheets and following contents:  

`SheetName1`:
| key         | en                               | de                                       |
|-------------|----------------------------------|------------------------------------------|
| loremIpsum  | Lorem Ipsum is simply dummy text | Lorem Ipsum ist ein einfacher Demo-Text  |
| goodMorning | Good morning                     | Guten Morgen                             |

`SheetName2`:
| key           | en                  | de                  |
|---------------|---------------------|---------------------|
| ERROR_MESSAGE | Error               | Fehler              |
| HELLO_AND_BYE | hello !!\r\nbye bye | hallo !!\r\ntschüss |


### Step 1, Import translation file   
After open the tool, click the button on the left to select the `xlsx` file that you want to parse.

![Jan-06-2022 19-05-32](https://user-images.githubusercontent.com/10906745/148373499-362a57ba-4f95-483a-849c-4a615291406c.gif)

### Step 2, Export JSON 
Once the parsing is done, you should see an thumbup icon (👍) in the middle of the application. Then, tap the button on the right to select the folder where you want to put all locales JSON files.

![Jan-06-2022 19-08-49](https://user-images.githubusercontent.com/10906745/148373896-06bf9f58-d7e7-4976-a3dc-6a48d3db3459.gif)

### FINIHSED!

You shall see all locales `JSON` files are stored in the folder you select at Step 2.  
The example above, will output two files `en.json` and `de.json` with following contents:

`en.json`
```json
{
  "SheetName1": {
    "loremIpsum": "Lorem Ipsum is simply dummy text",
    "goodMorning": "Good morning"
  },
  "SheetName2": {
    "ERROR_MESSAGE": "Error",
    "HELLO_AND_BYE": [ "hello !!", "bye bye"]
  }
}
```

`de.json`
```json
{
  "SheetName1": {
    "loremIpsum": "Lorem Ipsum ist ein einfacher Demo-Text",
    "goodMorning": "Guten Morgen"
  },
  "SheetName2": {
    "ERROR_MESSAGE": "Fehler",
    "HELLO_AND_BYE": [ "hallo !!", "tschüss"]
  }
}
```

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the MIT License.

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Project Link: [https://github.com/SDxBacon/electron-i18n-xlsx-to-json-converter](https://github.com/SDxBacon/electron-i18n-xlsx-to-json-converter)

<p align="right">(<a href="#top">back to top</a>)</p>
