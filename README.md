#対話式Chat-Bot

旅行先が決まらない時、質問を答えるだけでおすすめの旅行先とおすすめサイトを教えてくれます [Chat-Bot URL](https://chatbot-b5d04.web.app/).

## 使用機能

React/firebase/google-map-react

##　各種機能

### `App.jsx`

'''
  useEffect(() => {
    //非同期処理　async付きの即時関数
    (async () => {
      const dbRef = db.collection('questions');
      const nomalDataset = {};
      await dbRef.get()
        .then(snapshots => {
          snapshots.forEach(doc => {
            const id = doc.id
            const data = doc.data()
            nomalDataset[id] = data
          })
        })
      setDataset(nomalDataset);
      displayNextQuestion(currentId, nomalDataset[currentId])
    })()
  }, [])
'''
非同期処理を使い、firestoreからデータを取得

### `GoogleMapComponent.jsx`

'''
<GoogleMapReact
    bootstrapURLKeys={{ key: apiKEY }}
    defaultCenter={center}
    defaultZoom={17}
>
    {open && <LocationInfoBox info={markerArray} handleClose={handleClose} />}
    {markerData.map((ev, index) => {
        return <LocationMarker text={ev.text} lat={ev.lat} lng={ev.lng} key={index.toString()} onClick={() => { handleOpen(ev) }} />
    })}
</GoogleMapReact>
'''
オススメの旅行先をpropsで受け取り、googleMapとして画面に表示させる
apiKeyはenvファイルを使用

## 参考資料・教材

[とらゼミ実践編](https://youtu.be/MzJkWO73S70).

[React&NASA API]
(https://youtu.be/ontX4zfVqK8).