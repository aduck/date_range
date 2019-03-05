/**
 * 指定日期范围：如['2018-10-01', '2019-03-01']
 * 日：['2018-10-01', '2018-10-02', ..., '2019-03-01']
 * 月：['2018.10', '2018.11', ..., '2019.03']
 * 年：['2018', '2019']
 */

// 加几年
const addYear = ({year}, n = 1) => {
  return {year: year + n}
}

// 加几个月
const addMonth = ({year, month}, n = 1) => {
  return month + n > 12 ? ({year: year + Math.floor((month + n) / 12), month: (month + n) % 12}) : ({year: year, month: month + n})
}

// 加几天
const addDay = ({year, month, date}, n = 1) => {
  let dateObj = new Date(`${year}/${month}/${date}`)
  let resultDate = new Date(dateObj.getTime() + n * 24 * 60 * 60 * 1000)
  return {
    year: resultDate.getFullYear(),
    month: resultDate.getMonth() + 1,
    date: resultDate.getDate()
  }
}

// 生成年 {year: 2018}, {year: 2020}
export const rangeYear = (beginDate, endDate) => {
  let list = []
  while (endDate.year >= beginDate.year) {
    list.push(beginDate)
    beginDate = addYear(beginDate)
  }
  return list
}

// 生成月 {year: 2018, month: 1}, {year: 2019, month: 2}
export const rangeMonth = (beginDate, endDate) => {
  let list = []
  while (endDate.year > beginDate.year || endDate.month >= beginDate.month) {
    list.push(beginDate)
    beginDate = addMonth(beginDate)
  }
  return list
}

// 生成日 {year: 2018, month: 2, date: 21}, {year: 2018, month: 4, date: 12}
export const rangeDate = (beginDate, endDate) => {
  let list = []
  while (endDate.year > beginDate.year || endDate.month > beginDate.month || endDate.date >= beginDate.date) {
    list.push(beginDate)
    beginDate = addDay(beginDate)
  }
  return list
}

