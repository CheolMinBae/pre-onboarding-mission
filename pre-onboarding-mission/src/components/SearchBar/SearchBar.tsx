import { useState } from "react"
import { Box, Button, Input, InputGroup, InputRightElement, List, ListItem, Text } from "@chakra-ui/react"
import { SearchIcon } from "lucide-react"
import { DummyData } from "../../data/data.types"
import { dummy } from "../../data/data"

const SearchBar = () => {
  const [searchWord, setSearchWord] = useState<string>("")

  const highlightMatch = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return text
    }

    const regex = new RegExp(`(${highlight})`, "gi")
    return text.split(regex).map((part, index) => (regex.test(part) ? <strong key={index}>{part}</strong> : part))
  }

  const handleItemClick = (description: string) => {
    setSearchWord(description)
  }

  const filteredResults: DummyData[] = dummy.filter((item) =>
    item.description.toLowerCase().includes(searchWord.toLowerCase())
  )

  const groupedData = filteredResults.reduce((acc: { [key: string]: DummyData[] }, item) => {
    if (!acc[item.type]) {
      acc[item.type] = []
    }
    acc[item.type].push(item)
    return acc
  }, {})

  return (
    <Box position="relative" maxW="400px" m="auto">
      <InputGroup>
        <Input
          placeholder="검색어를 입력하세요."
          value={searchWord}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchWord(e.target.value)}
        />
        <InputRightElement marginRight="10px">
          <Button h="1.75rem" size="sm">
            <SearchIcon />
          </Button>
        </InputRightElement>
      </InputGroup>
      {searchWord && (
        <List
          mt={2}
          border="1px solid #ccc"
          borderRadius="4px"
          bg="white"
          position="absolute"
          width="100%"
          zIndex={1}
          maxH="200px"
          overflowY="auto"
        >
          {Object.entries(groupedData).map(([type, items]) => (
            <Box key={type} bg="gray.100" p={2}>
              <Text fontSize="sm" fontWeight="bold" color="gray.700">
                {type}
              </Text>
              {items.map((item, index) => (
                <ListItem
                  key={index}
                  p={2}
                  borderBottom="1px solid #eee"
                  cursor="pointer"
                  onClick={() => handleItemClick(item.description)}
                >
                  {highlightMatch(item.description, searchWord)}
                </ListItem>
              ))}
            </Box>
          ))}
        </List>
      )}
    </Box>
  )
}

export default SearchBar
