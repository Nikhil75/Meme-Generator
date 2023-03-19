import {Component} from 'react'
import {
  Container,
  Heading,
  Label,
  Input,
  SelectOption,
  CustomButton,
  ChildContainer,
  Text,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]

class MemeGenerator extends Component {
  state = {
    imageUrl: '',
    topText: '',
    bottomText: '',
    fontSize: fontSizesOptionsList[0].optionId,
    onChangeTopText: '',
    onChangeBackgroundimage: '',
    onChangeBottomText: '',
    onChangeFontSize: '',
  }

  getImage = event => {
    this.setState({
      imageUrl: event.target.value,
    })
  }

  getTopText = event => {
    this.setState({
      topText: event.target.value,
    })
  }

  getBottomText = event => {
    this.setState({
      bottomText: event.target.value,
    })
  }

  getFontSize = event => {
    this.setState({
      fontSize: event.target.value,
    })
  }

  submitForm = event => {
    event.preventDefault()
    const {imageUrl, topText, bottomText, fontSize} = this.state
    this.setState({
      onChangeBackgroundimage: imageUrl,
      onChangeTopText: topText,
      onChangeBottomText: bottomText,
      onChangeFontSize: fontSize,
    })
  }

  render() {
    const {
      imageUrl,
      topText,
      bottomText,
      fontSize,
      onChangeBackgroundimage,
      onChangeTopText,
      onChangeBottomText,
      onChangeFontSize,
    } = this.state
    return (
      <Container>
        <form className="form-control" onSubmit={this.submitForm}>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image">image Url</Label>
          <br />
          <Input
            type="text"
            id="image"
            onChange={this.getImage}
            placeholder="Enter the Image Url"
            value={imageUrl}
          />
          <br />
          <Label htmlFor="topText">Top Text</Label>
          <br />
          <Input
            type="text"
            id="topText"
            onChange={this.getTopText}
            placeholder="Enter the Top Text"
            value={topText}
          />
          <br />
          <Label htmlFor="bottomText">Bottom Text</Label>
          <br />
          <Input
            type="text"
            id="bottomText"
            onChange={this.getBottomText}
            placeholder="Enter the Bottom Text"
            value={bottomText}
          />
          <br />
          <Label htmlFor="fontSize">Font Size</Label>
          <br />
          <SelectOption
            id="fontSize"
            onChange={this.getFontSize}
            value={fontSize}
          >
            {fontSizesOptionsList.map(eachOption => (
              <option value={eachOption.optionId} key={eachOption.optionId}>
                {eachOption.displayText}
              </option>
            ))}
          </SelectOption>
          <br />
          <CustomButton type="submit">Generate</CustomButton>
        </form>

        <ChildContainer imageUrl={onChangeBackgroundimage} data-testid="meme">
          <Text fontSize={onChangeFontSize}>{onChangeTopText}</Text>
          <Text fontSize={onChangeFontSize}>{onChangeBottomText}</Text>
        </ChildContainer>
      </Container>
    )
  }
}

export default MemeGenerator
