const init = () => {
    document.getElementsByClassName('freebirdFormviewerViewCenteredContent')[0].setAttribute('style', 'width:95%')
    parseSections()
}

const parseSections = () => {
    var itemLists = document.querySelectorAll('.freebirdFormviewerViewItemList')
    for(var itemListIndex = 0; itemListIndex < itemLists.length; itemListIndex++ ){
        parseSection(itemLists[itemListIndex])
    }
}


const parseSection = (itemListDom) => {
    var sectionTitleDom = itemListDom.querySelectorAll('.freebirdMaterialHeaderbannerLabelTextContainer.freebirdSolidBackground.freebirdMaterialHeaderbannerPagebreakBanner')[0]
    var sectionTitle = sectionTitleDom ? sectionTitleDom.innerText : '';
    var itemsDomList = itemListDom.querySelectorAll('.freebirdFormviewerViewNumberedItemContainer')

    var toggleFromFiled = 0;
    for(var itemIndex = 0; itemIndex < itemsDomList.length; itemIndex++){
        var itemDom = itemsDomList[itemIndex];
        switch (sectionTitle) {
            case 'Spendings':
                if (itemDom.querySelectorAll('.freebirdFormviewerViewItemsGridContainer').length) to70(itemDom) && hideQuestion(itemDom)
                if (itemDom.querySelectorAll('.freebirdFormviewerViewItemsTextItemWrapper').length) toRightTop(itemDom)
                break;
            case 'Sometimes people are considered to be too young for some activities. Please tell me, in your opinion from what age is it acceptable for woman and man':
                if (itemDom.querySelectorAll('.freebirdFormviewerViewItemsGridContainer').length) to70(itemDom) && hideQuestion(itemDom)
                if (itemDom.querySelectorAll('.freebirdFormviewerViewItemsTextItemWrapper').length) {
                    toRightTopFrom(itemDom, toggleFromFiled) 
                    toggleFromFiled = !toggleFromFiled
                }
                break;
        }
                
    }
}


const to70 = (itemDom) => {
    itemDom.setAttribute('style', 'width:70%')
}

const hideQuestion = (itemDom) => {
    var titleDoms = itemDom.querySelectorAll('.freebirdFormviewerViewItemsGridCell.freebirdFormviewerViewItemsGridRowHeader')[0]
    for(var titleDomIndex = 0; titleDomIndex < titleDoms.length; titleDomIndex++){
        titleDoms[titleDomIndex].setAttribute('style', 'min-width: 0; width: 0; padding: 0;')
    }
}

const toRightTop = (itemDom) => {
    itemDom.setAttribute('style', 'width:30%; margin-left:70%; margin-top: -123px;')
}

const toRightTopFrom = (itemDom, toggleFromFiled) => {
    itemDom.setAttribute('style', 'width:30%; margin-left:70%; margin-top: -' 
        + (toggleFromFiled ? '0' : '123') + 'px; transform: translateY(-' 
            + (!toggleFromFiled ? '60px)' : '100px);height: 0;') )

    if(toggleFromFiled) {
        var itemHeaderDom = itemDom.querySelectorAll('.freebirdFormviewerViewItemsItemItemHeader')[0]
        if(itemHeaderDom){
            itemHeaderDom.setAttribute('style', 'display:none;')
        }
    } 
}

init();