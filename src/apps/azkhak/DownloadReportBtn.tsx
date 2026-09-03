import { DownloadSimpleIcon } from '@phosphor-icons/react'
import { stringify } from 'yaml'
import { Button } from '#/common/ui/button'
import { formatToHoursAndMinutes } from './formatToHoursAndMinutes'
import { useViewHistory, useViewSubject, useViewTotalTime } from './store'

/**
 * Hook that returns a method to download the current report as a YAML file.
 * Uses the existing `useViewSubject`, `useViewHistory`, and `useViewTotalTime` hooks.
 *
 * @returns {() => void} A function that triggers the download.
 */
export const useExportReport = (): (() => void) => {
  const subject = useViewSubject()
  const zakhaks = useViewHistory()
  const totalMinutes = useViewTotalTime()

  return () => {
    const exportData = {
      exportedAt: new Date().toISOString(),
      subject: subject || null,
      totalMinutes,
      total: formatToHoursAndMinutes(totalMinutes),
      entries: zakhaks.map(entry => ({
        type: entry.type,
        startedAt: entry.createdAt,
        endedAt: entry.endAt ?? null,
        durationInMinutes: entry.durationInMinutes,
      })),
    }

    const yamlContent = stringify(exportData)
    const blob = new Blob([yamlContent], { type: 'text/yaml;charset=utf-8' })
    const url = URL.createObjectURL(blob)

    const link = document.createElement('a')
    link.href = url
    link.download = `azkhak-report-${new Date().toISOString()}.yaml`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    URL.revokeObjectURL(url)
  }
}

export const DownloadReportBtn = () => {
  const downloadReport = useExportReport()

  return (
    <Button variant='default' onClick={downloadReport}>
      <DownloadSimpleIcon />
      <span>دانلود گزارش</span>
    </Button>
  )
}
