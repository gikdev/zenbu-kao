import { ButtonGroup } from '#/common/ui/button-group'
import { ManualTimeSection } from './ManualTimeSection'
import { MoreOptionsSection } from './MoreOptionsSection'
import { PlayPauseBtn } from './PlayPauseBtn'

export function ControlCenter() {
  return (
    <ButtonGroup>
      <MoreOptionsSection />

      <PlayPauseBtn />

      <ManualTimeSection />
    </ButtonGroup>
  )
}
